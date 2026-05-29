import { useState } from "react";
import axios from "axios";

function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    venue: "",
    organizer: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/events",
        formData
      );

      alert("Event Added Successfully!");

      setFormData({
        title: "",
        date: "",
        venue: "",
        organizer: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error adding event");
    }
  };

  return (
    <div>
      <h2>Add Event</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={formData.venue}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="organizer"
          placeholder="Organizer"
          value={formData.organizer}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Event
        </button>
      </form>
    </div>
  );
}

export default AddEvent;