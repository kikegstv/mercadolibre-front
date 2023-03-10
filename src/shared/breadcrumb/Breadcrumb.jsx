import "./Breadcrumb.css";
import arrow from "./../../assets/icons/arrow.svg";

function Breadcrumb({ items }) {
  console.log(items);
  return (
    <>
      <section className="breadcrumb">
        {items.map((item, key) => (
          <div key={key} className="breadcrumb__container">
            <p>{item}</p> {key < (items.length - 1) && (<img className="breadcrumb__container__image" src={arrow} alt="breadcrumb icon"></img>)}
          </div>
        ))}
      </section>
    </>
  );
}
export default Breadcrumb;
