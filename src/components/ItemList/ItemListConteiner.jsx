import Item from "./Item"
import "./itemlist.css";
import "./item.css";
import products from "../Data/data";

function ItemListConteiner() {
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