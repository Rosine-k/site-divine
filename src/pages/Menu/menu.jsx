import Header from "../../layout/Header/header";
import Banner from "../../components/Banner/banner";
import bannerMenu from "../../assets/menu.jpg";
import Footer from "../../layout/Footer/footer";
import Galerie from "../../components/Galerie/galerie";

function Menu() {
  return (
    <div className="">
      <Header />

      <main className="main">
        <Banner className="banner" image={bannerMenu} alt="bannermenu">
          <h1 className="banner-title">MENU</h1>
        </Banner>

        <section className="menu-section">
          {/* Entrées */}
          <div className="menu-block">
            <h2 className="menu-category">Entrées</h2>
            <div className="menu-list">
              <div className="menu-item">
                <p>LA BURRATA</p>
                <span>14€</span>
              </div>
              <div className="menu-item">
                <p>CARPACCIO DI MANZO</p>
                <span>15€</span>
              </div>
              <div className="menu-item">
                <p>FOIE GRAS</p>
                <span>17€</span>
              </div>
              <div className="menu-item">
                <p>POULET DYNAMITE</p>
                <span>14€</span>
              </div>
              <div className="menu-item">
                <p>CREVETTES DYNAMITE</p>
                <span>16€</span>
              </div>
              <div className="menu-item">
                <p>MINI BURGER À LA TRUFFE</p>
                <span>18€</span>
              </div>
              <div className="menu-item">
                <p>PLANCHE DE FROMAGE</p>
                <span>19€</span>
              </div>
            </div>
          </div>

          {/* Pâtes */}
          <div className="menu-block">
            <h2 className="menu-category">Pâtes</h2>
            <div className="menu-list">
              <div className="menu-item">
                <p>CARBONARA</p>
                <span>17€</span>
              </div>
              <div className="menu-item">
                <p>AL TARTUFATA</p>
                <span>28€</span>
              </div>
              <div className="menu-item">
                <p>CREVETTES</p>
                <span>19€</span>
              </div>
              <div className="menu-item">
                <p>AL FREDO</p>
                <span>22€</span>
              </div>
              <div className="menu-item">
                <p>PESTO</p>
                <span>17€</span>
              </div>
              <div className="menu-item">
                <p>LASAGNE</p>
                <span>18€</span>
              </div>
            </div>
          </div>

          {/* Poissons */}
          <div className="menu-block">
            <h2 className="menu-category">Poissons</h2>
            <div className="menu-list">
              <div className="menu-item">
                <p>RISOTO GAMBAS</p>
                <span>26€</span>
              </div>
              <div className="menu-item">
                <p>PAVÉ DE SAUMON</p>
                <span>22€</span>
              </div>
            </div>
          </div>

          {/* Formules */}
          <div className="menu-block">
            <h2 className="menu-category">Formules</h2>
            <div className="menu-info">
              <p>
                Découvrez nos menus soigneusement élaborés pour satisfaire toutes les envies.
                Que vous optiez pour une expérience savoureuse avec notre Formule Signature ou pour une dégustation plus raffinée avec la Formule Prestige, chaque assiette est pensée pour sublimer votre repas. 
              </p>
            </div>

            <div className="menu-formule">
              <h3>Signature <span>35€</span></h3>
              <p className="menu-note">Une expérience gourmande avec une sélection raffinée de nos plats emblématiques.</p>
              <p>(Entrée ou dessert + plat + mocktail)</p>

              <div className="menu-grid">
                <div>
                  <strong>ENTRÉES</strong>
                  <p>Burrata<br/>Carpaccio<br/>Poulet dynamite</p>
                </div>
                <div>
                  <strong>PLATS</strong>
                  <p>Burger classique<br/>Pâtes carbonara<br/>Pâtes pesto<br/>Escalope milanaise<br/>Lasagnes</p>
                </div>
                <div>
                  <strong>MOCKTAILS</strong>
                  <p>Marseille<br/>Bordeaux<br/>Pina Colada</p>
                </div>
                <div>
                  <strong>DESSERTS</strong>
                  <p>Fondant<br/>Crème brûlée<br/>Cheesecake</p>
                </div>
              </div>
            </div>

            <div className="menu-formule">
              <h3>Prestige <span>45€</span></h3>
              <p className="menu-note">Un voyage culinaire à travers nos plats les plus raffinés, pour une dégustation haut de gamme.</p>
              <p>(Entrée ou dessert + plat + mocktail)</p>

              <div className="menu-grid">
                <div>
                  <strong>ENTRÉES</strong>
                  <p>Burrata<br/>Carpaccio<br/>Foie gras<br/>Poulet dynamite<br/>Crevette dynamite</p>
                </div>
                <div>
                  <strong>PLATS</strong>
                  <p>Côtelette d'agneau<br/>Escalope parmigiane<br/>Pâtes Al Fredo<br/>Burger Inferno<br/>Pavé saumon</p>
                </div>
                <div>
                  <strong>MOCKTAILS</strong>
                  <p>Marseille<br/>Bordeaux<br/>Pina Colada<br/>Guava glow<br/>Tropical candy</p>
                </div>
                <div>
                  <strong>DESSERTS</strong>
                  <p>Tiramisu<br/>Tiramisu pistache<br/>Pain perdu<br/>Crème brûlée</p>
                </div>
              </div>
            </div>

            <div className="menu-cta">
              <button className="cta-button">RÉSERVEZ UNE TABLE</button>
            </div>
          </div>
        </section>
        <Galerie />
      </main>

      <Footer />
    </div>
  );
}

export default Menu;


// import './Menu.scss';

// function MenuContent() {
//   return (
//     <section className="menu-section">
//       <div className="menu-category">
//         <h2 className="menu-title">Entrées</h2>
//         <div className="menu-item">
//           <h3>LA BURRATA <span>14€</span></h3>
//           <p>Burrata Crémeuse, Figues noires, tomates cerises, pesto intense et balsamique vieilli. Une alliance raffinée et savoureuse.</p>
//         </div>
//         <div className="menu-item">
//           <h3>CARPACCIO DI MANZO <span>15€</span></h3>
//           <p>Fines tranches de bœuf maturé, roquette croquante, copeaux de parmesan, pesto parfumé et touche de citron frais.</p>
//         </div>
//         <div className="menu-item">
//           <h3>FOIE GRAS <span>17€</span></h3>
//           <p>Foie gras raffiné, accompagné de pain de campagne toasté et d’une confiture de figue délicatement sucrée.</p>
//         </div>
//         <div className="menu-item">
//           <h3>POULET DYNAMITE <span>14€</span></h3>
//           <p>Poulet croustillant sublimé par notre sauce signature, à l’équilibre parfait entre douceur et épices.</p>
//         </div>
//         <div className="menu-item">
//           <h3>CREVETTES DYNAMITE <span>16€</span></h3>
//           <p>Crevettes croustillantes enrobées d’une sauce secrète légèrement épicée.</p>
//         </div>
//         <div className="menu-item">
//           <h3>MINI BURGER À LA TRUFFE <span>18€</span></h3>
//           <p>Trois bouchées exquises alliant un steak fondant, une touche de truffe et un pain moelleux.</p>
//         </div>
//         <div className="menu-item">
//           <h3>PLANCHE DE FROMAGE <span>19€</span></h3>
//           <p>Une sélection de fromages affinés, accompagnée de charcuterie. Une mise en bouche idéale à partager.</p>
//         </div>
//       </div>

//       <div className="menu-category">
//         <h2 className="menu-title">Pâtes</h2>
//         <div className="menu-item">
//           <h3>CARBONARA <span>17€</span></h3>
//           <p>Tagliatelle enrobées d’une sauce onctueuse à la crème, sublimées par des lardons dorés.</p>
//         </div>
//         <div className="menu-item">
//           <h3>AL TARTUFATA <span>28€</span></h3>
//           <p>Rigatoni fondants sublimés par une crème de parmesan et l’intensité envoûtante de la truffe.</p>
//         </div>
//         <div className="menu-item">
//           <h3>CREVETTES <span>19€</span></h3>
//           <p>Linguini accompagnées de crevettes savoureuses et nappées d’une délicate sauce bisque de crevette à la tomate.</p>
//         </div>
//         <div className="menu-item">
//           <h3>AL FREDO <span>22€</span></h3>
//           <p>Escalope de poulet marinée dorée, accompagnée de penne nappées d’une sauce Alfredo relevée au parmesan et à la crème.</p>
//         </div>
//         <div className="menu-item">
//           <h3>PESTO <span>17€</span></h3>
//           <p>Linguini fondants nappés d’un pesto frais, sublimés par la douceur de la stracciatella et des éclats de pistache croquants.</p>
//         </div>
//         <div className="menu-item">
//           <h3>LASAGNE <span>18€</span></h3>
//           <p>Pâtes généreusement garnies de sauce bolognaise, béchamel crémeuse et fromage fondant.</p>
//         </div>
//       </div>

//       <div className="menu-category">
//         <h2 className="menu-title">Poissons</h2>
//         <div className="menu-item">
//           <h3>RISOTO GAMBAS <span>26€</span></h3>
//           <p>Risotto crémeux parfumé au safran, accompagné de gambas juteuses et savoureuses. Un plat riche en saveurs marines et en élégance.</p>
//         </div>
//         <div className="menu-item">
//           <h3>PAVÉ DE SAUMON <span>22€</span></h3>
//           <p>Pavé de saumon tendre et grillé à la perfection, accompagné de légumes croquants et d’une sauce légère au citron.</p>
//         </div>
//       </div>

//       <div className="menu-category">
//         <h2 className="menu-title">Formules</h2>
//         <div className="menu-item">
//           <h3>Signature <span>35€</span></h3>
//           <p>Une expérience gourmande avec une sélection raffinée de nos plats emblématiques.</p>
//           <ul>
//             <li>Entrée : Burrata, Carpaccio, Poulet dynamite</li>
//             <li>Plat : Burger classique, Pâtes carbonara, Pâtes pesto, Escalope milanaise, Lasagnes</li>
//             <li>Mocktails : Marseille, Bordeaux, Piña Colada</li>
//             <li>Desserts : Fondant, Crème brûlée, Cheesecake</li>
//           </ul>
//         </div>
//         <div className="menu-item">
//           <h3>Prestige <span>45€</span></h3>
//           <p>Un voyage culinaire à travers nos plats les plus raffinés, pour une dégustation haut de gamme.</p>
//           <ul>
//             <li>Entrée : Burrata, Carpaccio, Foie gras, Poulet dynamite, Crevette dynamite</li>
//             <li>Plat : Côtelette d’agneau, Escalope parmigiane, Pâtes Al Fredo, Burger Inferno, Pavé saumon</li>
//             <li>Mocktails : Marseille, Bordeaux, Piña Colada, Guava glow, Tropical candy</li>
//             <li>Desserts : Tiramisu, Tiramisu pistache, Tiramisu, Pain perdu, Crème brûlée</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default MenuContent;
