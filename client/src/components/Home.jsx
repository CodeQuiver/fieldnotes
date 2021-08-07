import NoteEntry from './NoteEntry';

function Home() {
  return (
    <div className="Home">
        <h2>
            Start a new entry:
        </h2>
      <NoteEntry />
    </div>
  );
}

export default Home;