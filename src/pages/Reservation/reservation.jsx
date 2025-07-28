import { useState } from "react";
import Header from "../../layout/Header/header";
import Banner from "../../components/Banner/banner";
import bannerResa from "../../assets/reservation.jpg";
import Galerie from "../../components/Galerie/galerie";
import Footer from "../../layout/Footer/footer";
import Resa1 from "../../assets/reservation/resto1.jpg";
import Resa2 from "../../assets/reservation/resto2.jpg";
import Resa3 from "../../assets/reservation/resto3.jpg";
import Resa4 from "../../assets/reservation/resto4.jpg";
import Resa5 from "../../assets/reservation/resto5.jpg";
import Resa6 from "../../assets/reservation/resto6.jpg";
import Resa7 from "../../assets/reservation/resto7.jpg";
import Resa8 from "../../assets/reservation/resto8.jpg";
import Resa9 from "../../assets/reservation/resto9.jpg";

const resaImages = [
  Resa1, Resa2, Resa3, Resa4, Resa5,
  Resa6, Resa7, Resa8, Resa9
];

function Reservation() {
  // const [formData, setFormData] = useState({
  //   nom: "",
  //   prenom: "",
  //   email: "",
  //   telephone: "",
  //   date: "",
  //   heure: "",
  //   personnes: "",
  //   commentaires: "",
  // });

  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  //   setErrors((prev) => ({ ...prev, [name]: "" }));
  // };

  // const validate = () => {
  //   const newErrors = {};
  //   if (!formData.nom.trim()) newErrors.nom = "Nom requis";
  //   if (!formData.prenom.trim()) newErrors.prenom = "Prénom requis";
  //   if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email invalide";
  //   if (!/^[0-9]{10}$/.test(formData.telephone)) newErrors.telephone = "Téléphone invalide";
  //   if (!formData.date) newErrors.date = "Date requise";
  //   if (!formData.heure) newErrors.heure = "Heure requise";
  //   if (!formData.personnes || parseInt(formData.personnes) < 1) newErrors.personnes = "Nombre de personnes requis";
  //   return newErrors;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newErrors = validate();
  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }
  //   e.target.submit(); // envoi vers Formspree
  // };

  return (
    <div>
      <Header />
      <main className="main">
        <Banner className="banner" image={bannerResa} alt="bannermenu">
          <h1 className="banner-title">Réservation</h1>
        </Banner>

        {/* <section className="reservation-section">
          <h2 className="reservation-title">Demande de réservation</h2>

          <form
            className="reservation-form"
            action="https://formspree.io/f/mblkdlrp"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
              {errors.prenom && <p className="error">{errors.prenom}</p>}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
              {errors.nom && <p className="error">{errors.nom}</p>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="telephone"
                placeholder="Téléphone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
              {errors.telephone && <p className="error">{errors.telephone}</p>}
            </div>

            <div className="form-group">
              
              <input
                type="date"
                name="date"
                
                value={formData.date}
                onChange={handleChange}
                required
              />
              {errors.date && <p className="error">{errors.date}</p>}
            </div>

            <div className="form-group">
              <input
                type="time"
                name="heure"
                placeholder="Heure"
                value={formData.heure}
                onChange={handleChange}
                required
              />
              {errors.heure && <p className="error">{errors.heure}</p>}
            </div>

            <div className="form-group">
              <input
                type="number"
                name="personnes"
                placeholder="Nombre de personnes"
                value={formData.personnes}
                onChange={handleChange}
                required
              />
              {errors.personnes && <p className="error">{errors.personnes}</p>}
            </div>

            <div className="form-group">
              <textarea
                name="commentaires"
                placeholder="Commentaires"
                value={formData.commentaires}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Soumettre la demande
            </button>
          </form>
        </section> */}

        <Galerie images={resaImages} />
      </main>
      <Footer />
    </div>
  );
}

export default Reservation;
