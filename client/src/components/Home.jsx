import NoteEntry from './NoteEntry';

function Home() {
    const state = {
        activePersonName: "placeholder",
        activeNoteText: "",
    }; //TODO- check syntax, maybe switch to Typescript

  return (
    <div className="Home">
        <header>
            <h1>Field Notes</h1>
        </header>
        <nav>
            {/* TODO-make sidebar with home and all notes options as applicable */}
            <li>
                <a href="#">All Notes</a>
                {/* TODO-Add React Router to link components or toggle them with state values */}
            </li>
        </nav>
        
        <NoteEntry
            activePersonName = {state.activePersonName}
            activeNoteText = {state.activeNoteText}
        />
    </div>
  );
}

export default Home;