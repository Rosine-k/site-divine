import videoP from '../../video/video.mp4';

export default function Privatisation() {
  return (
    <section className="privatisation-section">
      <div className="privatisation-text">
        <h2 className="privatisation-h2">Privatisation</h2>
        <p className="privatisation-p">
          Vous souhaitez réserver une table ou privatiser notre espace pour un événement 
          spécial — anniversaire, EVJF, soirée professionnelle ou autre ? 
          Chez Divine, c’est tout à fait possible !<br /><br />
          Notez cependant que les privatisations ne sont pas disponibles <strong>les vendredis et samedis.</strong><br /><br />
          N’hésitez pas à nous contacter dès maintenant pour organiser votre moment unique.
        </p>       
      </div>

      <div className="privatisation-image">
        <video 
          src={videoP}
          autoPlay 
          muted 
          loop 
          playsInline 
          className="privatisation-video"
        ></video>
      </div>
    </section>
  );
}
