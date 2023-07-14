import Apropos from "../../components/Apropos/apropos";
import "../About/about.css"
import Accordeon from "../../components/Accordeon/accordeon";
import slogan from "../../data/slogan.json"

const About= ()=>{
  return(
      <div className="About-contenant">
    <Apropos />
   
       <div className="about-accordeon">
       <div className="about-mvt">
       {slogan.map((item) => {
          return (
            <div className="contenant">
              <div className="text-accordion">
              <div key={item.id}>
               <Accordeon content={item.texte} title={item.title}/>
            </div>
            </div>
            </div>

            
          )
        })

        }
      </div>
    </div>
    </div>
   
   )
}
    
export default About