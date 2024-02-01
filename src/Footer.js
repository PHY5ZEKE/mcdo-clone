function Footer() {
  return (
    <footer className="footer">
      <div className="row-footer">
        <div className="column"></div>
        <div className="column-logos">
          <div className="image-container">
            <img src="/images/footermcdo.png" />
          </div>
          <div className="download-links">
            <img src="/images/google.png" />
            <img src="/images/appstore.png" />
          </div>
        </div>
        <div className="column">
          <p>Privacy Policy</p>
          <p>Our Food</p>
          <p>Terms and Condition</p>
          <p>Opportunities</p>
        </div>
        <div className="column">
          <p>About Us</p>
          <p>Careers</p>
          <p>Menu</p>
          <p>Family Activies</p>
        </div>
        <div className="column-links">
          <p>Follow us on</p>
          <img src="/images/facebook.png" />
          <img src="/images/instagram.png" />
          <img src="/images/twitter.png" />
        </div>
        <div className="column"></div>
      </div>
    </footer>
  );
}

export default Footer;
