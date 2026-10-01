import { useState } from "react";
import EventCard from "../components/EventCard.jsx";
import events from "../data/events.js";

function Events() {
  // what the user typed in the search box
  const [search, setSearch] = useState("");
  // which category button is selected
  const [category, setCategory] = useState("All");

  const categories = ["All", "Music", "Culture", "Tech", "Food", "Sports"];

  // keep only the events that match the search AND the category
  const filtered = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.city.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || event.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="section">
      <h1>All events</h1>

      <input
        type="text"
        placeholder="Search by name or city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="buttons">
        {categories.map((c) => (
          <button
            key={c}
            className={category === c ? "chip active" : "chip"}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* show a message if nothing matches */}
      {filtered.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <div className="grid">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;
