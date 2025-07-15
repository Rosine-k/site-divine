import privatisationImg from '../../assets/privatisation.jpg'; 

function Privatisation() {
  return (
    <section className="privatisation-section">
      <div className="privatisation-text">
        <h2 className='privatisation-h2'>Privatisation</h2>
        <p className='privatisation-p'>
          Vous souhaitez réserver une table ou privatiser notre espace pour un événement
          (anniversaires, EVJF, soirées professionnelles...) ? C’est possible !<br /><br />
          <strong>Sauf les vendredis et samedis.</strong><br /><br />
          Contactez-nous dès maintenant.
        </p>
      </div>
      <div className="privatisation-image">
        <img src={privatisationImg} alt="Privatisation" />
      </div>
    </section>
  );
}

export default Privatisation;