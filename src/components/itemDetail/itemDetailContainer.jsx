import { useState, useEffect } from "react";

import Item from "./Item"
import "./itemlist.css";
import { getSigleItems } from "../Services/mockService";

function itemDetailConteiner() {
const [products, setProduct] = useState([]);

async function getItemsAsync() {
    let respuesta = await getSigleItems();
    setProduct(respuesta);

}

useEffect(() => {
getItems().then((respuestaDatos) => {
    setProduct(respuestaDatos)
});
}, []);

return (
    <div className="item-list">
        <h3>{product.title}</h3>
        <img src={product.thumbnail}/>
    </div>
);
    }
export default itemDetailConteiner;