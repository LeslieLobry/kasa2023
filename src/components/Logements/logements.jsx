import products from"../../data/logement.json";
import "../../components/Logements/logements.css"
import {Link} from "react-router-dom"


function Logement (){
    return (
 <section className="logement-contenant">
        {products.map(product=> {
            return ( 
                <article key={product.id}>
            <Link to ={`/Logement/${product.id}`}className="product-components">
                <div key={product.id}></div>
                <div id = {product.id}>
                <div className="product-cover">
                    <div className="product-img">
                    <img src={product.cover} alt="Kasa"></img></div>
                <div className="product-title">
                    <h2>{product.title}</h2>
                </div>
                </div>
                </div>
           </Link> 
           </article>)
        })}
       </section>
    )
}
export default Logement;