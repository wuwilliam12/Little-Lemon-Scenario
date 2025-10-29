import HeroImage from '../images/restaurant chef B.jpg';

function Main() {
  return (
    <>
      <main>
        <div className="hero-section">
          <div className="hero-left">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family-owned Mediterranean restaurant,
              focused on traditional recipes served with a modern twist.
            </p>
            <button>Reserve a Table</button>
          </div>

          <div className="hero-right">
            <img src={HeroImage} alt="Hero Image" />
          </div>
        </div>

        <div className="specials-section">
          <h2>Specials</h2>
          <button>Online Menu</button>

          <div className="specials-list">
            {/* Specials will go here */}
          </div>
        </div>

        <div className="testimonials-section">
          <h3>Testimonials</h3>

          <div className="testimonials-list">
            {/* Testimonials will go here */}
          </div>
        </div>

        <div className="about-section">
          <div className="about-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              About text goes here. Lorem ipsum dolor sit amet,
            </p>
          </div>

          <div className="about-images">
            <img src={HeroImage} alt="About Image 1" className="about-image-1" />
            <img src={HeroImage} alt="About Image 2" className="about-image-2" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
