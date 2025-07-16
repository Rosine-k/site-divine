import Header from "../../layout/Header/header";
import Banner from "../../components/Banner/banner";
import bannerHome from "../../assets/banner.jpg";
import NavigationCards from "../../components/Navigation/navigation";
import Privatisation from "../../components/Privatisation/privatisation";
import Galerie from "../../components/Galerie/galerie";
import FaqCarousel from "../../components/Faq/faq";
import Contact from "../../components/Contact/contact";
import Footer from "../../layout/Footer/footer";

function Accueil() {

    return (
        <div className="">
            <Header />

            <main className="main">
                
                <Banner
                    className="banner"
                    image={bannerHome} 
                    alt="banner home"
                    >
                </Banner>

                <div className="textHome">
                    Chez DIVINE, on célèbre les plaisirs simples avec des plats faits maison, une ambiance <br></br>
                    chaleureuse et un accueil à l’italienne. Situé au cœur du 20e arrondissement de Paris, notre <br></br>
                    restaurant vous invite à une expérience gastronomique authentique, tous les soirs. Chez <br></br>
                    DIVINE, on célèbre les plaisirs simples avec des plats faits maison, une ambiance <br></br>
                    chaleureuse et un accueil à l’italienne. Situé au cœur du 20e arrondissement de Paris, notre <br></br>
                    restaurant vous invite à une expérience gastronomique authentique, tous les soirs.<br></br> <br></br>

                    Le restaurant accepte le paiement en <b>espèces et carte bleue</b>.
                </div>
                <NavigationCards />
                <Privatisation />
                <Galerie />
                <FaqCarousel />
                <Contact />

            </main>
            <Footer />

        </div>
    )
}

export default Accueil;

