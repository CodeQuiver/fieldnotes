
function NoteEntry({activePersonName, activeNoteText}) {
    return (
      <div className="NoteEntry">
        <h2>
            Start a new entry:
        </h2>
        <form>
            <label>Name</label>
            <input value={activePersonName}></input>
            {/* NOTE- considered splitting Name into Given Name/ Family Name, but in the field it's difficult to be precise,
             this app seems made to collect raw data for processing later so simple Name seems better.
             In real life I would discuss this with the client/ design team */}

            <label>Notes</label>
            <textarea value={activeNoteText}>
            </textarea>

            {/* TODO- expand to allow client to dynamically add custom field, or choose from previous custom fields added */}
        </form>
      </div>
    );
  }
  
  export default NoteEntry;