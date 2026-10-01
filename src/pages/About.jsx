// About page. Just text, change it to your own.
function About() {
  return (
    <div>
      <div className="hero">
        <h1>About us</h1>
        <p>We help people find events in every part of Ghana.</p>
      </div>

      <div className="section">
        <h2>Our story</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti accusamus quae alias veniam, exercitationem libero amet totam porro repellendus earum enim sed, ipsa voluptate illum ducimus in ex debitis dignissimos!
        </p>
      </div>

      <div className="section">
        <h2>What we do</h2>
        <div className="grid">
          <div className="card card-info">
            <h3>Find events</h3>
            <p>Search events by name, city or category.</p>
          </div>
          <div className="card card-info">
            <h3>Share events</h3>
            <p>Event hosts can send us their events to list.</p>
          </div>
          <div className="card card-info">
            <h3>Stay updated</h3>
            <p>See dates and prices in one place.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Our team</h2>
        {/* It is to be replaced with photos */}
        <div className="team">
          <div className="member"><div className="avatar">A</div><p>Team member 1</p></div>
          <div className="member"><div className="avatar">B</div><p>Team member 2</p></div>
          <div className="member"><div className="avatar">C</div><p>Team member 3</p></div>
        </div>
      </div>
    </div>
  );
}

export default About;
