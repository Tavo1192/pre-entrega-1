import { useState, useEffect } from "react";
import "./itemlist.css";
import { getSigleItems } from "../Services/mockService";
import ItemDetailConteiner from "../ItemDetailConteiner";

function itemDetailConteiner() {
const [products, setProduct] = useState([]);

async function getItemsAsync() {
    let respuesta = await getSigleItems();
    setProduct(respuesta);

}

useEffect(() => {
    getItemsAsync();
}, []);



return <ItemDetail product={products} />;
}
    
export default ItemDetailConteiner;