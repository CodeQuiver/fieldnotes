
function AllNotes({records}) {

    return (
      <div className="AllNotes">
        <h3 id="top">All Notes</h3>
        <ul className="list-group">
            {/* reversing so most recent should be at the top */}
            {records.slice(0).reverse().map(record => (
                <li key={record.timeStamp} className="list-group-item">
                    <div>
                    <div className="fw-bold">{record.personName}</div>
                    {record.noteText}
                    </div>
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
  