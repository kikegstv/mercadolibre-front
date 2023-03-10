import { NavLink } from "react-router-dom";

function Card({ item }) {
  return (
      <NavLink to={`/items/${item.id}`}>
        <div className="product-card">
          <div className="product-card__image">
            <img src={item.picture} alt="" />
          </div>
          <div className="product-card__info">
            <div>{`${item.price.currency} ${item.price.amount}`}</div>
            <div>
              <p>{item.title}</p>{" "}
            </div>
          </div>
        </div>
      </NavLink>
  );
}

export default Card;
