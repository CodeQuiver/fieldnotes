
function NoteEntry({activePersonName, activeNoteText, handleChange, handleSubmit}) {
    return (
      <div className="NoteEntry">
        <h2>
            Start a new entry:
        </h2>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input name="activePersonName" value={activePersonName} onChange={handleChange}></input>
            {/* NOTE- considered splitting Name into Given Name/ Family Name, but in the field it's difficult to be precise,
             this app seems made to collect raw data for processing later so simple Name seems better.
             In real life I would discuss this with the client/ design team */}

            <label>Notes</label>
            <textarea name="activeNoteText" value={activeNoteText} onChange={handleChange}>
            </textarea>

            {/* TODO- expand to allow client to dynamically add custom field, or choose from previous custom fields added */}
            <button>
            Submit
            </button>
        </form>
      </div>
    );
  }
  
  export default NoteEntry;