import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import aquagridImg from "../assets/aquagrid-hero.jpeg";

// Déclaration TypeScript pour Calendly
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function HeroSection() {
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

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-aqua-green-light via-white to-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Laissez notre <span className="text-aqua-green">IA</span> gérer<br />
              votre <span className="text-aqua-blue">irrigation</span>.
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-xl">
              Plus besoin de payer quelqu'un pour gérer votre irrigation. AquaGrid s'occupe de tout automatiquement : 
              analyse du sol, météo, besoins des cultures. Économisez temps, argent et eau.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-aqua-green hover:bg-aqua-green-dark text-white px-6 py-3 font-semibold text-base transition-all duration-200 transform hover:scale-105 shadow-lg"
                onClick={openCalendly}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Demander une démo
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-3 font-semibold text-base transition-all duration-200 shadow-lg"
                onClick={openWhatsApp}
              >
                <SiWhatsapp className="w-5 h-5 mr-2" />
                Contact WhatsApp
              </Button>
            </div>
          </motion.div>
          
          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 lg:w-96">
              {/* Phone frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19]">
                  <img 
                    src={aquagridImg} 
                    alt="AquaGrid - Interface d'irrigation intelligente" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              {/* Floating stats */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -right-6 top-1/4 bg-white rounded-xl shadow-xl p-4 hidden lg:block z-10"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-aqua-green">-40%</div>
                  <div className="text-sm text-gray-600 whitespace-nowrap">d'eau économisée</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-6 bottom-1/3 bg-white rounded-xl shadow-xl p-4 hidden lg:block z-10"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-aqua-blue">100%</div>
                  <div className="text-sm text-gray-600">autonome</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
