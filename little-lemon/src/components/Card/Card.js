import "./Card.css"

function SpecialCard({ ImgSrc, DishName, Description, Price }) {
  return (
    <>
      <div className="card">
        {<img src={ImgSrc}></img>}

        <div className="card-header">
          <h3>{DishName}</h3>
          <p>{Price}</p>
        </div>

        <p>{Description}</p>

        <button>Order a delivery</button>
      </div>
    </>
  );
}

export function TestimonialCard({ ImgSrc, DishName, Description, Price }) {
  return (
    <>
      <div className="card">
        {<img src={ImgSrc}></img>}

        <div className="card-header">
          <h3>{DishName}</h3>
          <p>{Price}</p>
        </div>

        <p>{Description}</p>

        <button>Order a delivery</button>
      </div>
    </>
  );
}

export default SpecialCard;