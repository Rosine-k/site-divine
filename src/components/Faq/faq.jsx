import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import FaqImg from "../../assets/faq3.jpg";

const faqData = [
  {
    question: "Est-ce que je dois réserver à l’avance ?",
    answer: "Ce n’est pas obligatoire mais fortement conseillé, surtout le week-end.",
  },
  {
    question: "Quels sont les horaires d’ouverture ?",
    answer: "Nous sommes ouverts tous les jours de 18h à 01h en semaine, jusqu’à 01h30 le week-end.",
  },
  {
    question: "Acceptez-vous les paiements par carte ?",
    answer: "Oui, nous acceptons les paiements par carte bancaire et en espèces.",
  },
  {
    question: "Proposez-vous des options végétariennes ?",
    answer: "Oui, notre carte contient plusieurs options végétariennes faites maison.",
  },
  {
    question: "Peut-on privatiser le restaurant ?",
    answer: "Oui, sauf les vendredis et samedis. Contactez-nous pour plus de détails.",
  },
  {
    question: "Y a-t-il un menu enfant ?",
    answer: "Nous n’avons pas de menu enfant fixe, mais nous pouvons adapter les plats.",
  },
  {
    question: "Puis-je venir avec mon animal de compagnie ?",
    answer: "Les petits chiens sont acceptés en laisse, à condition qu’ils restent calmes.",
  },
  {
    question: "Faites-vous des plats à emporter ?",
    answer: "Oui, vous pouvez commander sur place ou nous appeler directement.",
  }
];

export default function FaqCarousel() {
  return (
    <section className="faq-carousel-section">
      <div className="faq-nav-btn faq-prev swiper-button-prev"></div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.faq-next',
          prevEl: '.faq-prev',
        }}
        spaceBetween={40}
        slidesPerView={1}
        className="faq-swiper"
      >
        {faqData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="faq-card">
              {/* ✅ Image de fond avec faible opacité */}
              <img src={FaqImg} alt="fond carte" className="faq-bg-img" />
              
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="faq-nav-btn faq-next swiper-button-next"></div>
    </section>
  );
}
