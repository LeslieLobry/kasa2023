import Banniere from "../../assets/Banniere.png";
import "../../components/Barriere/barriere.css"
function Barriere() {
    return (
        <div className="baniere-components">
           <div className="baniere-img">
            <img src={Banniere} alt="Kasa"/>
           </div>
           <div className="baniere-text">
            <h1>Chez vous, partout et ailleurs</h1>
           </div>
        </div>)
}
 
export default Barriere