import "./CardList.css"

import SpecialCard, {TestimonialCard} from './SpecialCard.js';

function SpecialCardList( {CardData} ) {
  return (
    <div className="card-list">
      {CardData.map((item) => (
        <SpecialCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}

export function TestimonialCardList( {CardData} ) {
  return (
    <div className="card-list">
      {CardData.map((item) => (
        <TestimonialCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}


export default SpecialCardList;