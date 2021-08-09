import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';


function NoteEntry({activePersonName, activeNoteText, handleChange, handleSubmit}) {
    return (
      <div className="NoteEntry">
        <h2>
            Start a new entry:
        </h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
          <Form.Label for="activePersonName">Name</Form.Label>
            <input name="activePersonName" value={activePersonName} onChange={handleChange}></input>
            {/* NOTE- considered splitting Name into Given Name/ Family Name, but in the field it's difficult to be precise,
             this app seems made to collect raw data for processing later so simple Name seems better.
             In real life I would discuss this with the client/ design team */}
          </FormGroup>
            
          <FormGroup>
          <Form.Label for="activeNoteText">Notes</Form.Label>
            <textarea name="activeNoteText" value={activeNoteText} onChange={handleChange}>
            </textarea>
          </FormGroup>

            {/* TODO- expand to allow client to dynamically add custom field, or choose from previous custom fields added */}
            <Button onSubmit={handleSubmit}>
            Submit
            </Button>
        </Form>
      </div>
    );
  }
  
  export default NoteEntry;