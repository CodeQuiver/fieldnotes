import React from 'react';
import AllNotes from './AllNotes';
import NoteEntry from './NoteEntry';
import API from '../utils/API';
import buildRecord from '../helpers';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePersonName: '',
            activeNoteText: '',
            userName: 'user', //Generic username for now, including this in order to attach the writer's name to each record (needs login or anonymous login to function of course)
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
            <div className="Home container-fluid">
                <div className="row">
                    <header className="col">
                        Notepad
                    </header>
                </div>
                                
                <div className="row">
                    <div className="col">
                        <NoteEntry
                        activePersonName = {this.state.activePersonName}
                        activeNoteText = {this.state.activeNoteText}
                        handleChange = {this.handleChange}
                        handleSubmit = {this.handleSubmit}
                        />
                    </div>
                </div>
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
        
        const newRecord = buildRecord(this.state.activePersonName, this.state.activeNoteText, Date.now(), this.state.userName)

        this.setState(state => ({
            records: state.records.concat(newRecord),
            activePersonName: '',
            activeNoteText: '',
        }));

        this.createRecord(newRecord);
      }
 
}

export default Home;