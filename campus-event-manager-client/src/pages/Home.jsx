import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Campus Event Manager</h1>

      <Link to="/events">
        <button>View Events</button>
      </Link>

      <br /><br />

      <Link to="/add">
        <button>Add Event</button>
      </Link>
    </div>
  );
}

export default Home;