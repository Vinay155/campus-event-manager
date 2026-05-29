import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditEvent() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    venue: "",
    organizer: "",
    description: "",
  });

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/events/${id}`
    );

    setFormData(response.data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(
      `http://localhost:5000/api/events/${id}`,
      formData
    );

    alert("Event Updated!");
  };

  return (
    <div>
      <h2>Edit Event</h2>

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="venue"
        value={formData.venue}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Update
      </button>
    </div>
  );
}

export default EditEvent;