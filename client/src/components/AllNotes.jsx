
function AllNotes({records}) {

    return (
      <div className="AllNotes">
        <h3 id="top">All Notes</h3>
        
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
  