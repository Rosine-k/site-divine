import imgMenu from "../../assets/menu.jpg";
import imgReservation from "../../assets/resa.jpg";

function NavigationCards() {
  return (
    <div className="nav-section">
      <div className="nav-card">
        <img src={imgMenu} alt="Menu" className="nav-img" />
        <div className="nav-overlay">
          <span className="nav-text">MENU</span>
        </div>
      </div>
      <div className="nav-card">
        <img src={imgReservation} alt="Réservation" className="nav-img" />
        <div className="nav-overlay">
          <span className="nav-text">RÉSERVATION</span>
        </div>
      </div>
    </div>
  );
}

export default NavigationCards;
