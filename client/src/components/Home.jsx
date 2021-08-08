import React from 'react';
import AllNotes from './AllNotes';
import NoteEntry from './NoteEntry';
import API from '../utils/API';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePersonName: '',
            activeNoteText: '',
            records: [],  };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    // TODO- maybe replace with hooks, that's what I'd use in a larger project
    componentDidMount() {
		this.getAllRecords();
	}
    
    render() {
        return (
            <div className="Home">
                <header>
                    <h1>Field Notes</h1>
                </header>
                <nav style={{float: "right"}}>
                    {/* TODO-make sidebar with home and all notes options as applicable */}
                    <li>
                        <a href="#">All Notes</a>
                        {/* TODO-Add React Router to link components or toggle them with state values */}
                    </li>
                </nav>
                
                <NoteEntry
                    activePersonName = {this.state.activePersonName}
                    activeNoteText = {this.state.activeNoteText}
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                />

                {/* TODO- move this to its own linked page, here only for testing- alternatively toggle visibility within single page */}
                <AllNotes
                    records = {this.state.records}
                />
            </div>
        );
    }

    //************ API helpers **************
	getAllRecords = () => {
		API.getRecords()
			.then((res) => {
				this.setState({ records: res.data });
			})
			.catch((err) => console.log(err));
	};

    //create Record Function
	createRecord = (newRecord) => {
		API.createRecord(newRecord)
			.then((res) => {
				alert(`${res.data.personName} has been added`);
				this.getAllRecords();
			})
			.catch((err) => console.log(err));
	};

    //************ Handlers **************
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value });
      }

      handleSubmit(event) {
        event.preventDefault();
        if (this.state.activeNoteText.length === 0 && this.state.activePersonName.length === 0) {
          return;
        }
        
        const newRecord = {
          personName: this.state.activePersonName,
          noteText: this.state.activeNoteText,
          timeStamp: Date.now()
        };

        this.setState(state => ({
            records: state.records.concat(newRecord),
            activePersonName: '',
            activeNoteText: '',
        }));

        this.createRecord(newRecord);
      }
 
}

export default Home;