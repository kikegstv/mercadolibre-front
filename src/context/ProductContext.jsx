import { createContext, useEffect, useState } from "react";
import { productList as data } from "../assets/mocks/product-list";

export const ProductContext = createContext();

export function ProductContextProvider(props) {
  const [search, setSearch] = useState("");

  const [productDetail, setDataProductDetail] = useState(null);

  const [products, getProducts] = useState([]);

  return (
    <>
      <ProductContext.Provider
        value={{
          search,
          productDetail,
          products,
          setDataProductDetail,
          setSearch,
          getProducts,
        }}
      >
        {props.children}
      </ProductContext.Provider>
    </>
  );
}
