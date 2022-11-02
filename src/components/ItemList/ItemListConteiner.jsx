import Item from "./Item"
import "./itemlist.css";
import "./item.css";

function ItemListConteiner(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <Item 
          imgurl="https://http2.mlstatic.com/D_NQ_NP_745273-MLA46325993479_062021-W.webp"
          title="Mochila Diamond" 
          price={1000}/>
        <Item 
          imgurl="https://http2.mlstatic.com/D_NQ_NP_806658-MLA50739213587_072022-W.webp"
          title="Riñonera Black" 
          price={2000}/>
        <Item 
          imgurl="https://http2.mlstatic.com/D_NQ_NP_650098-MLA48752974625_012022-W.webp"
          title="Matera Pampa" 
          price={2000}/>
    </div>
  )
}

export default ItemListConteiner;