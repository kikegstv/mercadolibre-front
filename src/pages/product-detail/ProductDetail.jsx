import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import Breadcrumb from "../../shared/breadcrumb/Breadcrumb";
import "./ProductDetail.css";

function ProductDetail() {
  const params = useParams();
  
  let { productDetail, setDataProductDetail } = useContext(ProductContext);

  useEffect(() => {
    fetch(`https://mercadolibre-api.onrender.com/api/items/${params.id}`)
      .then((response) => response.json())
      .then((data) => setDataProductDetail(data.body));
  }, [params.id]);

  if (!productDetail) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <div>
        <main className="product-detail">
          <section className="product-detail__container">
            <Breadcrumb items={productDetail.categories}></Breadcrumb>
            <div className="product-item">
              <div className="product-item__info">
                <img
                  className="product-item__info__image"
                  src={productDetail.productDetail.item.picture}
                  alt=""
                />
                <div className="product-item__info__container">
                  <div>
                    {productDetail.productDetail.item.condition === "new"
                      ? "Nuevo"
                      : "Usado"}{" "}
                    | {productDetail.productDetail.item.sold_quantity} vendidos
                  </div>
                  <h3 className="product-item__info__container__title">
                    {productDetail.productDetail.item.title}
                  </h3>
                  <div class="product-item__info__container__price">
                    {productDetail.productDetail.item.price.currency}{" "}
                    {productDetail.productDetail.item.price.amount}
                  </div>
                  <div className="product-item__info__container__button">
                    <button>Comprar</button>
                  </div>
                </div>
              </div>
              <div class="product-item__description__title">
                Descripción del producto
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
