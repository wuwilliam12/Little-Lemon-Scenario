import './SpecialsSection.css'

import SpecialCardList from '../Card/CardList.js';
import { SpecialCardData } from '../../data/SpecialCardData';

function SpecialsSection() {
  return (
    <>
      <div className='specials-section section-row'>
        <div className='specials-header'>
          <h2 className='text-display-title'>This week's specials!</h2>
          <button className='text-lead menu-button'>Online Menu</button>
        </div>

        <div className="specials-list">
          <SpecialCardList CardData={SpecialCardData}/>
        </div>
      </div>
    </>
  );
}

export default SpecialsSection;
