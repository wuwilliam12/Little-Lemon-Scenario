import './Main.css';

import HeroImage from '../icons_assets/restauranfood.jpg';
import About1 from '../icons_assets/Mario and Adrian A.jpg';
import About2 from '../icons_assets/Mario and Adrian b.jpg';

import SpecialCardList from './SpecialCardList.js';
import {TestimonialCardList} from './SpecialCardList.js';

const SpecialCardData = [
  {
    id: 1,
    image: "../icons_assets/greek salad.jpg",
    title: "Greek Salad",
    price: 12.99,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    image: "../icons_assets/bruchetta.svg",
    title: "Bruchetta",
    price: 5.99,
    description: "Our Bruschetta is made from grilled bread thta has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    image: "../icons_assets/lemon dessert.jpg",
    title: "Lemon Dessert",
    price: 5.00,
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const TestimonialCardData = [
  {
    id: 1,
    rating: 5,
    profilePic: "",
    name: "Rubella",
    reviewText: "Great atmosphere and food!",
  },
  {
    id: 2,
    rating: 4,
    profilePic: "",
    name: "Thomas",
    reviewText: "The food is so unique! A must try!",
  },
  {
    id: 3,
    rating: 4,
    profilePic: "",
    name: "Ivan",
    reviewText: "Really good!",
  },
  {
    id: 4,
    rating: 5,
    profilePic: "",
    name: "Michelle",
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
            {/*<SpecialCardList CardData={SpecialCardData}/>*/}
          </div>
        </div>

        <div className="testimonials-section section-row">
          <h3 className='text-display-title'>Testimonials</h3>

          <div className="testimonials-list">
            {/*<TestimonialCardList CardData={TestimonialCardData}/>*/}
          </div>
        </div>

        <div className="about-section section-row">
          <div className="about-text">
            <h2 className="text-display-title">Little Lemon</h2>
            <h3 className='text-subtitle'>Chicago</h3>
            <p className='text-lead'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
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
