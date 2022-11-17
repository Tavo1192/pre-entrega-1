import { useState, useEffect } from "react";
import { getSingleItem } from "../Services/mockService";
import "./itemDetailContainer.css";


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  async function getItemsAsync() {
    let respuesta = await getSingleItem();
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    <div className="card-detail">
    <div className="card-detail_img">
    <img src={product.thumbnail} alt="Product img"/>
    </div>
    <div className="card-detail_detail"></div>
    <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
    </div>
  );
}

export default ItemDetailContainer;