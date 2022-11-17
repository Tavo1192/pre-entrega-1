import { useState, useEffect } from "react";
import { getSingleItem } from "../Services/mockService";
import "./itemDetail.css";

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
    <div className="item-list">
      <h3>{product.title}</h3>
      <h5>{product.description}</h5>
      <img src={product.thumbnail}/>
      <p>${product.price}</p>
    </div>
  );
}

export default ItemDetailContainer;