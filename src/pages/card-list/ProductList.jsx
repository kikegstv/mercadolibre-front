import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import Breadcrumb from "../../shared/breadcrumb/Breadcrumb";
import Card from "../../shared/card/Card";
import NavBar from "../../shared/navbar/NavBar";
import "./ProductList.css";

function ProductList() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const searchText = queryParams.get("q");

  let { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    fetch(`https://mercadolibre-api.onrender.com/api/items?q=${searchText}`)
      .then((response) => response.json())
      .then((data) => getProducts(data.body));
  }, [searchText]);

  if (products.length === 0) {
    return <h1>Cargando...</h1>;
  }
  console.log(products);
  return (
    <>
      <div>
        <main className="product-list">
          <section className="product-list__container">
            <Breadcrumb items={products.categories}></Breadcrumb>
            {products.items.map((item) => (
              <Card key={item.id} item={item}></Card>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export default ProductList;
