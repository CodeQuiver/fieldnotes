import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';


function NoteEntry({activePersonName, activeNoteText, handleChange, handleSubmit, handleReset}) {
    return (
      <div className="NoteEntry">
        <div className="row">
          <h3 className="col">
              Notepad- take notes here:
          </h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
          <Form.FloatingLabel htmlFor="activePersonName">Contact Name</Form.FloatingLabel>
            <input name="activePersonName" value={activePersonName} onChange={handleChange} required="true"></input>
            {/* NOTE- considered splitting Name into Given Name/ Family Name, but in the field it's difficult to be precise,
             this app seems made to collect raw data for processing later so simple Name seems better.
             In real life I would discuss this with the client/ design team */}
          </FormGroup>
            
          <FormGroup>
          <Form.FloatingLabel htmlFor="activeNoteText">Notes</Form.FloatingLabel>
            <textarea name="activeNoteText" value={activeNoteText} onChange={handleChange} required="true">
            </textarea>
          </FormGroup>

          {/* Note- this is where I might expand to allow client to dynamically add custom fields. They would either type a new field name or choose from previous custom fields in a dropdown. */}
          <Button type="submit" className="btn m-1">
          Save & Start New Entry
          </Button>
          <Button type="reset" className="btn btn-secondary m-1" onClick={handleReset}>
          Clear
          </Button>
        </Form>
      </div>
    );
  }
  
  export default NoteEntry;