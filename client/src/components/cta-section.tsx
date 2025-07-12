import { motion } from "framer-motion";
import { Wrench, Headphones, TrendingUp, Calendar, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";

// Déclaration TypeScript pour Calendly
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function CTASection() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/aquagrid/30min'
      });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/33753482970', '_blank');
  };

  const offers = [
    {
      icon: Wrench,
      title: "Installation gratuite",
      subtitle: "Valeur 2000€"
    },
    {
      icon: Headphones,
      title: "Support premium",
      subtitle: "3 mois inclus"
    },
    {
      icon: TrendingUp,
      title: "Analyse personnalisée",
      subtitle: "Audit gratuit"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-aqua-green-light to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Faites partie des premiers utilisateurs et économisez jusqu'à <span className="text-aqua-green">70%</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Profitez de notre offre de lancement exclusive. Installation gratuite et 3 mois d'accompagnement personnalisé pour les 10 premiers agriculteurs qui nous rejoignent.</p>
          </motion.div>
          
          {/* Offer highlights */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {offers.map((offer, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <offer.icon className="w-8 h-8 text-aqua-green mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm">{offer.subtitle}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Contact Options */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Choisissez votre mode de contact préféré
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Calendly Option */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="w-full bg-aqua-green hover:bg-aqua-green-dark text-white px-8 py-4 font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg mb-4"
                  onClick={openCalendly}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Réserver une démo en ligne
                </Button>
                <p className="text-gray-600 text-sm">
                  Planifiez un créneau qui vous convient.<br />
                  Démo personnalisée de 30 minutes.
                </p>
              </div>
              
              {/* WhatsApp Option */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg mb-4"
                  onClick={openWhatsApp}
                >
                  <SiWhatsapp className="w-6 h-6 mr-2" />
                  Contact immédiat WhatsApp
                </Button>
                <p className="text-gray-600 text-sm">
                  Réponse rapide et conseils directs.<br />
                  Disponible 7j/7 de 8h à 20h.
                </p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-2">
                <Mail className="w-4 h-4 inline mr-2 text-aqua-green" />
                Ou envoyez-nous un email : 
                <a href="mailto:contact@aquagrid.fr" className="text-aqua-green hover:text-aqua-green-dark font-medium ml-1">
                  contact@aquagrid.fr
                </a>
              </p>
              <p className="text-gray-600">
                <Phone className="w-4 h-4 inline mr-2 text-aqua-green" />
                Téléphone : 
                <a href="tel:+33753482970" className="text-aqua-green hover:text-aqua-green-dark font-medium ml-1">
                  +33 7 53 48 29 70
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
