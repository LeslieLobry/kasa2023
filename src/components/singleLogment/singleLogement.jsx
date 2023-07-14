import products from "../../data/logement.json"
import { useParams } from "react-router-dom"
import React from "react";
import "../../components/singleLogment/singleLogement.css"
import Carousel from "../Carousel/carousel"
import Accordeon from "../Accordeon/accordeon";
import starnul from "../../assets/starnul.png"
import starplein from "../../assets/starplein.png"

function Logement() {
    const { id } = useParams();
    const product = products.find((item) => item.id === id);
    const {title,pictures, description, host, rating,location, equipments} = product;
  
    return (
      <section className="logement"> 
       {/* images */}
        <div className="carrousel">
            <Carousel slides={pictures} ></Carousel>
          </div>
        <div className="logement-haut">
        {/*info proprio*/}
                <div className="logement-info">
          <div className="logement-1">
<div className="logement-title">
        <h2>{title}</h2>
          </div>
          <div className="logement-host">
          <div className="logement-name-img">
<div className="logement-name">
        <p>{host.name}</p>
        <p>{host.lastname}</p>
        </div>
        <div className="logement-img">
            <img src={host.picture} alt="Kasa"></img>
</div>
</div>
    </div>
</div>
{/*info logement */}
<div className="logement-2">
        
          <div className="logement-location">
        <p>{location}</p>
        </div>
</div>

        <div className="logement-3">
        <div className="logement-tags">
            {product.tags.map((tags, index) => (
              <div key={index}>
                <div className="tags">{tags}</div>
              </div>
            ))}</div>  
          {/* note */}
          <div className="rating">
							{[...Array(5)].map((star, index) => {
								const value = index + 1;
								return (
									<img key={index} src={value <= rating ? starplein : starnul} alt="star" />
								)
							})}
						</div>   
            </div>

          
        </div> 
</div>
<div className="logement-bas">
<div className="logement-accordeon">
        <div className="logement-mvt">
          <div className="description">
        <Accordeon title="Description" content={description} >
          
        </Accordeon>
</div>
<div className="equipements">
  <Accordeon title="Equipements" content={equipments}>
   
  </Accordeon>
</div>

</div>
</div>
</div>
      </section>
    );
  }
  export default Logement;