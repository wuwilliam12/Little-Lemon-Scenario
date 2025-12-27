import "./Card.css";


function SpecialCard({ imgSrc, dishName, description, price }) {
  return (
    <>
      <div className="specials-card">
        <img src={`/images/${imgSrc}`} alt={imgSrc} />

        <div className="specials-card-header text-card-title">
          <h3>{dishName}</h3>
          <p className="specials-card-price">${price}</p>
        </div>

        <p className="specials-card-description text-card-paragraph">{description}</p>

        <button className="specials-card-button text-card-highlight">
          <span>Order a delivery</span>
          <svg >
          </svg>
        </button>
      </div>
    </>
  );
}

export function TestimonialCard({ ImgSrc, rating, name, reviewText }) {
  return (
    <>
      <div className="card">
        <h4>{rating}</h4>

        <div className="profile">
          <img src={ImgSrc} alt={ImgSrc}></img>
          <h3>{name}</h3>
        </div>

        <p className="text-card-paragraph">{reviewText}</p>
      </div>
    </>
  );
}

export default SpecialCard;
