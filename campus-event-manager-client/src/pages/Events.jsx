import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/events"
      );

      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/events/${id}`
      );

      fetchEvents();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>All Events</h2>

      {events.map((event) => (
        <div key={event._id} className="event-card">
          <h3>{event.title}</h3>

          <p>{event.venue}</p>

          <Link to={`/edit/${event._id}`}>
            <button>Edit</button>
          </Link>

          <button
            onClick={() => deleteEvent(event._id)}
          >
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Events;