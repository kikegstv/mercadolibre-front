import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import "./ProductDetail.css";

function ProductDetail() {
  const params = useParams();
  console.log(params);
  let { productDetail, setDataProductDetail } = useContext(ProductContext);

  useEffect(() => {
    fetch(`http://localhost:3000/api/items/${params.id}`)
      .then((response) => response.json())
      .then((data) => setDataProductDetail(data.body));
  }, [params.id]);
  console.log(productDetail);
  if (!productDetail) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <div>
        <main className="product-detail">
          <section className="product-detail__container">
            <div className="product-item">
              <div className="product-item__info">
                <img
                  className="product-item__info__image"
                  src={productDetail.productDetail.item.picture}
                  alt=""
                />
                <div>
                  <div>
                    {productDetail.productDetail.item.condition === "new"
                      ? "Nuevo"
                      : "Usado"}{" "}
                    | {productDetail.productDetail.item.sold_quantity} vendidos
                  </div>
                  <div>{productDetail.productDetail.item.title}</div>
                  <div>
                    {productDetail.productDetail.item.price.currency}{" "}
                    {productDetail.productDetail.item.price.amount}
                  </div>
                  <div></div>
                </div>
              </div>
              <p>{productDetail.productDetail.item.description}</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default ProductDetail;
