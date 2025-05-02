import Styles from "./Health.module.css";
import hoppyPic from "../assets/Hoppyoo.jpg";
import whatsappPic from "../assets/whatsapp symbol.png";
import arrowPic from "../assets/ArrowSquareLeft.png";
function HealthRightPharmacy() {
  return (
    <div className={Styles.pharmacyContainer}>
      <div className={Styles.mainContainer}>
        <div>
          <img src={hoppyPic} alt="image" width="40px" />
        </div>

        <div className={Styles.curamap}> 
          <p>CURAMAP</p>
        </div>
      </div>

      <div className={Styles.paragraph}>
        <p className="">Health Rite Pharmacy</p>
      </div>
      <div className={Styles.secondmain}>
        <button className={Styles.button}>
          <img
            src={arrowPic}
            alt="icon"
           
          />
          Directions
        </button>
      </div>
      <p>Adress : 72 Akerele Street Surulere, Lagos</p>
      <p>Hours: 10am- 9pm</p>
      <div className={Styles.thirdmain}>
        <img src={whatsappPic} alt="whatsapp image" />
        <p>0903334458559</p>
      </div>
    </div>
  );
}
export default HealthRightPharmacy;
