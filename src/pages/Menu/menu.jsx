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

              <div className="menu-description">
                <div className="menu-item">
                  <p>LA BURRATA</p>
                  <span>14€</span>
                </div>
                <p>Burrata Crémeuse, Figues noires, tomates cerises, pesto intense et balsamique vieilli. Une alliance raffinée et savoureuse.</p>
              </div>
              

              <div className="menu-description">
                <div className="menu-item">
                  <p>CARPACCIO DI MANZO</p><span>15€</span>
                </div>
                <p>Fines tranches de bœuf, roquette, copeaux de parmesan, pesto et citron.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>FOIE GRAS</p><span>17€</span>
                </div>
                <p>Foie gras maison, pain toasté et confiture de figue.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>POULET DYNAMITE</p><span>14€</span>
                </div>
                <p>Poulet croustillant avec sauce signature douce et épicée.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CREVETTES DYNAMITE</p><span>16€</span>
                </div>
                <p>Crevettes croustillantes nappées d’une sauce secrète légèrement épicée.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>MINI BURGER À LA TRUFFE</p><span>18€</span>
                </div>
                <p>Trois mini-burgers avec steak fondant, pain moelleux, touche de truffe.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>PLANCHE DE FROMAGE</p><span>19€</span>
                </div>
                <p>Sélection de fromages affinés accompagnés de charcuteries.</p>
              </div>

            </div>
          </div>

          {/* Salades */}
          <div className="menu-block">
            <h2 className="menu-category">Salades</h2>
            <div className="menu-list">
              <div className="menu-description">
                <div className="menu-item">
                  <p>SALADE CÉSAR</p>
                  <span>16€</span>
                </div>
                <p>Poulet frit croustillant, salade iceberg, tomates cerises juteuses, copeaux de parmesan affiné, croûtons dorés et sauce César onctueuse.</p>
              </div>
              <div className="menu-description">
                <div className="menu-item">
                  <p>SALADE NORDIQUE</p>
                  <span>17€</span>
                </div>
                <p>Saumon fumé délicatement tranché, laitue fraîche, avocat fondant, tomates cerises juteuses et oignons rouges, le tout relevé par une <br></br> vinaigrette citronnée.</p>
              </div>
              <div className="menu-description">
                <div className="menu-item">
                  <p>SALADE MÉDITERRANÉENNE</p>
                  <span>16€</span>
                </div>
                <p>Un mélange raffiné de roquette et laitue, sublimé par des oignons rouges, olives noires, feta onctueuse, concombre croquant, tomates<br></br> cerises et câpres.</p>
              </div>
              <div className="menu-description">
                <div className="menu-item">
                  <p>SALADE ITALIENNE</p>
                  <span>19€</span>
                </div>
                <p>Mélange de roquette et iceberg croquants, charcuterie fine, burrata crémeuse, poivrons grillés, tomates cerises et olives noires, le tout<br></br> sublimé par une vinaigrette balsamique.</p>
              </div>
            </div>
          </div>

          {/* Pâtes */}
          <div className="menu-block">
            <h2 className="menu-category">Pâtes</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>CARBONARA</p><span>17€</span>
                </div>
                <p>Tagliatelle, sauce onctueuse à la crème et lardons.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>AL TARTUFATA</p><span>28€</span>
                </div>
                <p>Rigatoni, crème de parmesan et truffe noire.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CREVETTES</p><span>19€</span>
                </div>
                <p>Linguini, crevettes et sauce bisque de crevette.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>AL FREDO</p><span>22€</span>
                </div>
                <p>Penne Alfredo avec escalope de poulet marinée.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>PESTO</p><span>17€</span>
                </div>
                <p>Linguini au pesto maison, stracciatella et pistache.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>LASAGNE</p><span>18€</span>
                </div>
                <p>Lasagnes maison à la bolognaise et béchamel fondante.</p>
              </div>

            </div>
          </div>

          {/* Poissons */}
          <div className="menu-block">
            <h2 className="menu-category">Poissons</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>RISOTTO GAMBAS</p><span>26€</span>
                </div>
                <p>Risotto au safran, gambas poêlées.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>PAVÉ DE SAUMON</p><span>22€</span>
                </div>
                <p>Saumon grillé, légumes croquants et sauce citronnée.</p>
              </div>

            </div>
          </div>

          {/* Viandes */}
          <div className="menu-block">
            <h2 className="menu-category">Viandes</h2>
            <div className="menu-list">
              <div className="menu-description">
                <div className="menu-item">
                  <p>ESCALOPE MILANAISE</p><span>24€</span>
                </div>
                <p>Escalope de veau panée, tagliatelle ou frites maison.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>ESCALOPE PARMIGIANA</p><span>26€</span>
                </div>
                <p>Escalope gratinée à la mozzarella, sauce tomate basilic.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CÔTELETTE D'AGNEAU</p><span>29€</span>
                </div>
                <p>Côtelettes grillées accompagnées de légumes du marché.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>BURGER INFERNO</p><span>19€</span>
                </div>
                <p>Burger maison avec steak épicé, cheddar, sauce infernale.</p>
              </div>

            </div>
          </div>

          {/* Burgers */}
          <div className="menu-block">
            <h2 className="menu-category">Burgers</h2>
            <div className="menu-list">
              <div className="menu-description">
                <div className="menu-item">
                  <p>TRUFFE</p>
                  <span>24€</span>
                </div>
                <p>Steak de bœuf de 180g, chou rouge croquant, tomates fraîches, cornichons, brie à la truffe fondant et mayonnaise à la truffe.</p>
              </div>
              <div className="menu-description">
                <div className="menu-item">
                  <p>LE CLASSIQUE</p>
                  <span>17€</span>
                </div>
                <p>Steak de bœuf de 180g, cheddar vieilli fondant, salade croquante, tomates fraîches et oignons.</p>
              </div>
              <div className="menu-description">
                <div className="menu-item">
                  <p>INFERNO</p>
                  <span>19€</span>
                </div>
                <p>Poulet frit croustillant, oignons rouges, salade fraîche, jalapeños marinés et cheddar fondant.</p>
              </div>
            </div>
          </div>


          {/* Desserts */}
          <div className="menu-block">
            <h2 className="menu-category">Desserts</h2>
            <div className="menu-list">
              <div className="menu-description">
                <div className="menu-item">
                  <p>FONDANT</p><span>9€</span>
                </div>
                <p>Moelleux au chocolat, cœur coulant.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CRÈME BRÛLÉE</p><span>9€</span>
                </div>
                <p>Crème vanillée caramélisée à la flamme.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CHEESECAKE</p><span>9€</span>
                </div>
                <p>Cheesecake classique au coulis de fruits rouges.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>TIRAMISU</p><span>10€</span>
                </div>
                <p>Tiramisu maison, café et mascarpone.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>PAIN PERDU</p><span>10€</span>
                </div>
                <p>Pain perdu brioché, glace vanille et caramel beurre salé.</p>
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

            {/* Mocktails */}
            <div className="menu-block">
              <h2 className="menu-category">Mocktails</h2>
              <div className="menu-list">
                <div className="menu-description">
                  <div className="menu-item">
                    <p>MARSEILLE</p>
                    <span>10€</span>
                  </div>
                  <p>Nectar d’ananas, purée de passion, purée de mangue</p>
                </div>
                <div className="menu-description">
                  <div className="menu-item">
                    <p>BORDEAUX</p>
                    <span>10€</span>
                  </div>
                  <p>Fraise, purée de framboise, passion</p>
                </div>
                <div className="menu-description">
                  <div className="menu-item">
                    <p>PINA COLADA</p>
                    <span>10€</span>
                  </div>
                  <p>Purée de coco, nectar d’ananas</p>
                </div>
                <div className="menu-description">
                  <div className="menu-item">
                    <p>MOJITO</p>
                    <span>13€</span>
                  </div>
                  <p>Menthe, citron vert, sucre de canne, limonade</p>
                </div>
                <div className="menu-description">
                  <div className="menu-item">
                    <p>TROPICAL CANDY</p>
                    <span>12€</span>
                  </div>
                  <p>Nectar d’ananas, fruit rouge, bubble gum</p>
                </div>
                <div className="menu-description">
                  <div className="menu-item">
                    <p>GUAVA GLOW</p>
                    <span>12€</span>
                  </div>
                  <p>Nectar de goyave, mangue, citron vert, sucre de canne</p>
                </div>
                <div className="menu-description">
                  <div className="menu-item">
                    <p>BLUE BIRD</p>
                    <span>13€</span>
                  </div>
                  <p>Curacao, pomme, passion, citron vert</p>
                </div>
              </div>
            </div>


            
          </div>
          <div className="menu-cta">
            <button className="cta-button">RÉSERVEZ UNE TABLE</button>
          </div>

        </section>
        <Galerie />
      </main>

      <Footer />
    </div>
  );
}

export default Menu;