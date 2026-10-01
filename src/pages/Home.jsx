import { Link } from "react-router-dom";
import EventCard from "../components/EventCard.jsx";
import events from "../data/events.js";

function Home() {
  // just 3 events 
  const featured = events.slice(0, 3);

  return (
    <div>
      {/* big green section at the top */}
      <div className="hero">
        <h1>Find events happening in Ghana</h1>
        <p>Concerts, festivals, tech meetups and more.</p>
        <Link to="/events" className="btn">Browse events</Link>
      </div>

      <div className="section">
        <h2>Featured events</h2>
        <div className="grid">
          {/* loop through the 3 events and make a card for each */}
          {featured.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div className="section">
        <div className="cta">
          <h2>Hosting an event?</h2>
          <p>Contact us and we will list it.</p>
          <Link to="/contact" className="btn dark-btn">Contact us</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
