import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import Card from "../../shared/card/Card";
import NavBar from "../../shared/navbar/NavBar";
import "./ProductList.css";

function ProductList() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const searchText = queryParams.get("q");

  let { products, dataProductList, search, getProducts } = useContext(ProductContext);

  useEffect(() => {
    fetch(`http://localhost:3000/api/items?q=${searchText}`)
      .then((response) => response.json())
      .then((data) => getProducts(data.body.items));
  }, [searchText]);

  if (products.length === 0) {
    return <h1>Don´t have products yet</h1>;
  }
  console.log(products);
  console.log(dataProductList);
  return (
    <div>
      <div>
        <main className="product-list">
          <section className="product-list__container">
            {products.map((item) => (
              <Card key={item.id} item={item}></Card>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProductList;
