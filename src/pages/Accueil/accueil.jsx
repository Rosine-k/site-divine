import Header from "../../layout/Header/header";
import Banner from "../../components/Banner/banner";
import bannerHome from "../../assets/banner.jpg";
import NavigationCards from "../../components/Navigation/navigation";
import Privatisation from "../../components/Privatisation/privatisation";
import Galerie from "../../components/Galerie/galerie";
import FaqCarousel from "../../components/Faq/faq";
import Contact from "../../components/Contact/contact";
import Footer from "../../layout/Footer/footer";
import photo1 from "../../assets/galerie/photo1.jpg";
import photo2 from "../../assets/galerie/photo2.jpg";
import photo3 from "../../assets/galerie/photo3.jpg";
import photo4 from "../../assets/galerie/photo4.jpg";
import photo5 from "../../assets/galerie/photo5.jpg";
import photo6 from "../../assets/galerie/photo6.jpg";
import photo7 from "../../assets/galerie/photo7.jpg";
import photo8 from "../../assets/galerie/photo8.jpg";
import photo9 from "../../assets/galerie/photo9.jpg";
import photo10 from "../../assets/galerie/photo10.jpg";
import photo11 from "../../assets/galerie/photo11.jpg";
import photo12 from "../../assets/galerie/photo12.jpg";
import photo13 from "../../assets/galerie/photo13.jpg";
import photo14 from "../../assets/galerie/photo14.jpg";
import photo15 from "../../assets/galerie/photo15.jpg";
import photo16 from "../../assets/galerie/photo16.jpg";

const homeImages = [
  photo1, photo2, photo3, photo4, photo5,
  photo6, photo7, photo8, photo9, photo10, 
  photo11, photo12, photo13, photo14, photo15, 
  photo16
];

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
                    Bienvenue chez Divine <br />

                    Cuisine franco-italienne – Goût, générosité et ambiance – Paris 20e <br />

                    Situé au 12 rue de Surmelin, dans le 20e arrondissement de Paris, Divine est un lieu 
                    unique<br /> où la richesse  de la cuisine française rencontre la générosité des saveurs italiennes 
                    dans une ambiance <br />à la fois chic, chaleureuse et décontractée. <br />

                    Chez Divine, on célèbre le vrai goût avec des plats généreux, préparés avec soin et servis dans un <br />cadre élégant  
                    mais accessible.

                    Que ce soit pour un dîner romantique, une sortie entre amis ou famille <br />ou bien une occasion  spéciale, nous vous 
                    accueillons avec un service attentionné et une ambiance musicale<br /> choisie pour rendre chaque moment agréable. <br />

                    Divine, c’est l’adresse parfaite pour ceux qui aiment bien manger, bien s’amuser, et partager des moments <br />conviviaux. 
                    Un lieu où l’on se sent bien, où les assiettes sont aussi belles que savoureuses, et où chaque <br />visite mérite d’être partagée.
                </div>
                <NavigationCards />
                <Privatisation />
                <Galerie images={homeImages} />

                <FaqCarousel />
                <Contact />

            </main>
            <Footer />

        </div>
    )
}

export default Accueil;

