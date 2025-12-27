import './HeroSection.css'

import HeroImage from '../../icons_assets/restauranfood.jpg';

function HeroSection() {
  return(
    <div className='hero-section sec-row-ul'>
      <div className='hero-content sec-row-l'>
        <div className="hero-left">
          <h1 className='text-display-title'>Little Lemon</h1>
          <h3 className='text-subtitle'>Chicago</h3>
          <p className='text-lead'>
            We are a family-owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>

          <button className='text-lead reserve-button'>Reserve a Table</button>
        </div>

        <div className="hero-right">
          <img src={HeroImage} alt="Hero" className='hero-image'/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;