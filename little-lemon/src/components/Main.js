import './Main.css';

import HeroImage from '../icons_assets/restaurant chef B.jpg';
import About1 from '../icons_assets/Mario and Adrian A.jpg';
import About2 from '../icons_assets/Mario and Adrian b.jpg';

import SpecialCardList from './SpecialCardList.js';
import {TestimonialCardList} from './SpecialCardList.js';

const SpecialCardData = [
  {
    id: 1,
    image: "",
    title: "Greek Salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    image: "",
    title: "Greek Salad",
    description: "",
  },
  {
    id: 3,
    image: "",
    title: "Greek Salad",
    description: "",
  },
];

const TestimonialCardData = [
  {
    id: 1,
    profile: "",
    name: "",
    reviewText: "",
  },
  {
    id: 2,
    profile: "",
    name: "",
    reviewText: "",
  },
  {
    id: 3,
    profile: "",
    name: "",
    reviewText: "",
  },
  {
    id: 4,
    profile: "",
    name: "",
    reviewText: "",
  },
];


function Main() {
  return (
    <>
      <div className='main'>
        <div className='hero-section section-row'>
          <div className='hero-content'>
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

        <div className='specials-section section-row'>
          <div className='specials-header'>
            <h2 className='text-display-title'>This week's specials!</h2>
            <button className='text-lead menu-button'>Online Menu</button>
          </div>

          <div className="specials-list">
            <SpecialCardList CardData={SpecialCardData}/>
          </div>
        </div>

        <div className="testimonials-section">
          <h3 className='text-display-title'>Testimonials</h3>

          <div className="testimonials-list">
            <TestimonialCardList CardData={TestimonialCardData}/>
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
            <img src={About1} alt="About 1" className="about-1" />
            <img src={About2} alt="About 2" className="about-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
