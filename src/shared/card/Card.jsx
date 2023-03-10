function Card({ item }) {
  return (
    <div key={item.id} className="product-card">
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
  );
}

export default Card;
