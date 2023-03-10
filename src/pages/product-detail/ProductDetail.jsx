import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {

    

    const params = useParams();
    console.log(params);
    return <h1>Here Product Detail</h1>
}

export default ProductDetail;