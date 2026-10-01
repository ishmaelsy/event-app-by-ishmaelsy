// A card for one event. The event comes in through props.
// I use this same card on the Home page and the Events page.
function EventCard(props) {
  const event = props.event;

  return (
    <div className="card">
      {/* colored box where a picture can go later */}
      <div className={"card-top " + event.category}>{event.category}</div>
      <div className="card-info">
        <h3>{event.title}</h3>
        <p className="small">{event.date} - {event.city}</p>
        <p>{event.info}</p>
        <p className="price">{event.price}</p>
      </div>
    </div>
  );
}

export default EventCard;
