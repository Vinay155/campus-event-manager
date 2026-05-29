import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/add" element={<AddEvent />} />
        <Route
  path="/edit/:id"
  element={<EditEvent />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;