
function AllNotes({records}) {

    return (
      <div className="AllNotes">
        <header id="top">
            <h3>All Notes</h3>
        </header>
        
        <ul>
            {records.map(record => (
                <li key={record.timeStamp}>
                    <strong>{record.personName}:</strong> {record.noteText}
                </li>
            ))}
        </ul>

        <footer>
            <small>
                <a href="#top">Back to Top</a>
            </small>
        </footer>
      </div>
    );
  }
  
  export default AllNotes;
  