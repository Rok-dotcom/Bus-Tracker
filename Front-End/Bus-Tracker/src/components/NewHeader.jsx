import "./NewHeader.css";

function NewHeader() {
  return (
    <header className="header">
      <div className="logo">🚍 BusTracker</div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
          <li>
            <a href="#">Suggestion</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NewHeader;
