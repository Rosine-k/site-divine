import Header from "../../layout/Header/header";
import Footer from "../../layout/Footer/footer";

export default function MentionsLegales() {
  return (
    <div className="">
        <Header />
        <main className="mentions-legales">
            <div className="container">
                <h1>Mentions Légales</h1>

                <section>
                    <h2>Identification de l’éditeur</h2>
                    <p>
                        <strong>DIVINE</strong><br />
                        Activité : Restaurant<br />
                        Responsable de publication : Mr <br />
                        Adresse : 12 rue du Surmelin, 75020 Paris, France<br />
                        Tél. : 06 11 66 42 31<br />
                        Email : <a href="mailto:contact@divine.fr">contact@divine.fr</a><br />
                        SIRET : 123 456 789 00000<br />
                        TVA intracommunautaire : FR00123456789
                    </p>
                </section>

                <section>
                    <h2>Hébergement</h2>
                    <p>
                    Hébergeur : <strong>Nom hebergeur</strong><br />
                    Adresse : adresseA<br />
                    Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">site.com</a>
                    </p>
                </section>

                <section>
                    <h2>Propriété intellectuelle</h2>
                    <p>
                    Le contenu du site (textes, visuels, logo, etc.) est la propriété exclusive de DIVINE,
                    sauf mention contraire. Toute reproduction ou représentation, intégrale ou partielle,
                    sans autorisation préalable, est interdite.
                    </p>
                </section>

                <section>
                    <h2>Responsabilité</h2>
                    <p>
                    Les informations présentées sur ce site sont fournies à titre indicatif.
                    DIVINE s'efforce de les maintenir à jour, mais ne saurait être tenue responsable
                    des erreurs, omissions ou de l’utilisation faite de ces informations.
                    </p>
                </section>

                <section>
                    <h2>Informations spécifiques à la restauration</h2>
                    <p>
                    Conformément à la réglementation française :
                    </p>
                    <ul>
                    <li>Les prix sont indiqués TTC et service compris.</li>
                    <li>La composition des menus (boisson incluse ou non) est précisée.</li>
                    <li>Une note détaillée est remise à chaque client sur demande.</li>
                    </ul>
                </section>

                <section>
                    <h2>Contact</h2>
                    <p>
                    Pour toute question relative au site, veuillez nous contacter à :{" "}
                    <a href="mailto:contact@divine.fr">contact@divine.fr</a>
                    </p>
                </section>
            </div>
       </main>
       <Footer />
    </div>
  );
}
