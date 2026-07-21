import styles from "./AppFooter.module.css";

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h3>🚌 BusTracker</h3>
          <p>
            BusTracker is a community-powered platform built to help MSRTC
            passengers share live bus updates. Travelers inside the bus can post
            the current location, bus number, route, seat availability, and
            other useful information, while passengers waiting for the bus can
            search and view those updates.
          </p>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li>🏠 Home</li>
            <li>❓ Help</li>
            <li>💬 Feedback</li>
            <li>💡 Suggestion</li>
          </ul>
        </div>

        <div className={styles.note}>
          <h3>Important Note</h3>
          <p>
            This website does <strong>not</strong> use GPS tracking. All
            information is shared voluntarily by passengers travelling in the
            bus. Please verify updates whenever possible.
          </p>
        </div>
      </div>

      <hr />

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} BusTracker | Built for MSRTC passengers
          through community contributions ❤️
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
