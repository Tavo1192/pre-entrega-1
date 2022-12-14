import "./itemDetail.css";
import "./itemList.css";

function ItemDetail({ product }) {
    return (
    <div className="card-detail">
    <div className="card-detail_img">
    <img src={product.thumbnail} alt="Product img" />
    </div>
    <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
    </div>
      {/* <ItemCount stock={product.stock}/> */}
    </div>
);
}

export default ItemDetail;