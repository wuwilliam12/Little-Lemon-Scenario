import './TestimonialSection.css'

import TestimonialCardList from '../Card/CardList.js';
import { TestimonialCardData } from '../../data/TestimonialCardData';

function TestimonialSection() {
  return (
    <>
      <div className="testimonials-section section-row">
        <h3 className='text-display-title'>Testimonials</h3>

        <div className="testimonials-list">
          <TestimonialCardList CardData={TestimonialCardData}/>
        </div>
      </div>
    </>
  );
}

export default TestimonialSection;
