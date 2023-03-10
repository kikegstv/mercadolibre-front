import { createContext, useEffect, useState } from "react";
import { productList as data } from "../assets/mocks/product-list";

export const ProductContext = createContext();

export function ProductContextProvider(props) {
  //let productList = []; Esta sería la lista de productos que reemplaza al mock
  /* NavBar */
  const [search, setSearch] = useState("");
  /*  */

  const [dataProductList, setDataProductList] = useState(null);

  

  /* Product List */
  const [products, getProducts] = useState([]);

  /* useEffect(() => {
    getProducts(data.items);
  }, []); */
  /*  */
  return (
    <>
      <ProductContext.Provider
        value={{
          search,
          dataProductList,
          products,
          setDataProductList,
          setSearch,
          getProducts
        }}
      >
        {props.children}
      </ProductContext.Provider>
    </>
  );
}
