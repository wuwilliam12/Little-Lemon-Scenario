import "./CardList.css"

import SpecialCard, {TestimonialCard} from './Card.js';

function SpecialCardList( {CardData} ) {
  return (
    <div className="card-list-3">
      {CardData.map((item) => (
        <SpecialCard
          key={item.id}
          imgSrc={item.image}
          dishName={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}

export function TestimonialCardList( {CardData} ) {
  return (
    <div className="card-list-4">
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