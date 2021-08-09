import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';


function NoteEntry({activePersonName, activeNoteText, handleChange, handleSubmit}) {
    return (
      <div className="NoteEntry">
        <div className="row">
          <h4 className="col">
              Notepad- take notes here:
          </h4>
        </div>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
          <Form.FloatingLabel htmlFor="activePersonName">Contact Name</Form.FloatingLabel>
            <input name="activePersonName" value={activePersonName} onChange={handleChange}></input>
            {/* NOTE- considered splitting Name into Given Name/ Family Name, but in the field it's difficult to be precise,
             this app seems made to collect raw data for processing later so simple Name seems better.
             In real life I would discuss this with the client/ design team */}
          </FormGroup>
            
          <FormGroup>
          <Form.FloatingLabel htmlFor="activeNoteText">Notes</Form.FloatingLabel>
            <textarea name="activeNoteText" value={activeNoteText} onChange={handleChange}>
            </textarea>
          </FormGroup>

            {/* TODO- expand to allow client to dynamically add custom field, or choose from previous custom fields added */}
            <Button type="submit">
            Save & Start New Entry
            </Button>
        </Form>
      </div>
    );
  }
  
  export default NoteEntry;