import { useState, useEffect } from "react";
import Item from "./Item"
import "./itemlist.css";
import getItems from "../Services/mockService";

function ItemListConteiner() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  getItems().then((respuestaDatos) => {
    setProducts(respuestaDatos)
  });
}, []);

  return (
    <div className="item-list">
      {
        products.map((product)=> {
          return (
            <div>
              <Item
              key={product.id}
              imgurl={product.thumbnail}
              title={product.title} 
              price={product.price}
              category={product.category}
            />
            </div>
          );
        })
      }
    </div>
  );
    }
export default ItemListConteiner;