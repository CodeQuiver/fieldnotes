import React from 'react';
import NoteEntry from './NoteEntry';
import API from '../utils/API';
import buildRecord from '../helpers';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import AllNotes from './AllNotes';
import { Alert } from 'bootstrap';

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
        this.handleReset = this.handleReset.bind(this);
      }

    // TODO- maybe replace with hooks, that's what I'd use in a larger project
    componentDidMount() {
		this.getAllRecords();
	}
    
    render() {
        return (
            <div className="Home container-fluid">
                <Router>
                    <nav className="navbar justify-content-end m-0 p-0">
                        <Link className="nav-item m-0 p-2" to="/">Notepad</Link>
                        <Link className="nav-item m-0 p-2" to="/allNotes">Past Notes</Link>
                    </nav>

                    <Switch>
                        <Route path="/allNotes">
                            <AllNotes records={this.state.records} />
                        </Route>
                        <Route path="/">
                            <NoteEntry
                                activePersonName = {this.state.activePersonName}
                                activeNoteText = {this.state.activeNoteText}
                                handleChange = {this.handleChange}
                                handleSubmit = {this.handleSubmit}
                                handleReset = {this.handleReset}
                             />
                        </Route>
                    </Switch>
                    {/* <footer><small>&copy; Copyright Emily Haines <a href="https://github.com/codequiver">Github: CodeQuiver</a></small></footer> TODO- comment back in once it can be properly styled at bottom of page */}
                </Router>
                
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

	createRecord = (newRecord) => {
		API.createRecord(newRecord)
			.then((res) => {
				this.getAllRecords();
			})
			.catch((err) => console.log(err));
	};

    //************ Handlers **************
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value });
      }

      handleReset() {
        this.setState({
            activePersonName: '',
            activeNoteText: '',
        });
      }

      handleSubmit(event) {
        event.preventDefault();
        if (this.state.activeNoteText.length === 0 || this.state.activePersonName.length === 0) {
          return;
        }
        
        const newRecord = buildRecord(this.state.activePersonName, this.state.activeNoteText, Date.now(), this.state.userName)

        this.setState(state => ({
            records: state.records.concat(newRecord),
        }));

        this.handleReset();

        this.createRecord(newRecord);
      }
 
}

export default Home;