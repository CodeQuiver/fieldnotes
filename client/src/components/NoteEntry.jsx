
function NoteEntry(props) {
    return (
      <div className="NoteEntry">
        <form>
            <label>Name</label>
            <input>
                {props.name}
            </input>
            {/* NOTE- considered splitting Name into Given Name/ Family Name, but in the field it's difficult to be precise,
             this app seems made to collect raw data for processing later so simple Name seems better.
             In real life I would discuss this with the client/ design team */}

            <label>Notes</label>
            <textarea>
                {props.notes}
            </textarea>

            {/* TODO- expand to allow client to dynamically add custom field, or choose from previous custom fields added */}
        </form>
      </div>
    );
  }
  
  export default NoteEntry;