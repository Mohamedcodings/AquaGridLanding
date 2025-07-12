import { motion } from "framer-motion";
import { Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const openCalendly = () => {
    alert('Intégration Calendly à venir. Contactez-nous par email ou WhatsApp.');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/33753482970', '_blank');
  };

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-aqua-green-light via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Laissez notre <span className="text-aqua-green">IA</span> gérer<br />
              votre <span className="text-aqua-blue">irrigation</span>.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-none">
              Plus besoin de payer quelqu'un pour gérer votre irrigation. AquaGrid s'occupe de tout automatiquement : 
              analyse du sol, météo, besoins des cultures. Économisez temps, argent et eau.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-aqua-green hover:bg-aqua-green-dark text-white px-8 py-4 font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                onClick={openCalendly}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Demander une démo
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-aqua-green text-aqua-green hover:bg-aqua-green hover:text-white px-8 py-4 font-semibold text-lg transition-all duration-200"
                onClick={openWhatsApp}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact WhatsApp
              </Button>
            </div>
          </motion.div>
          
          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto w-64 sm:w-80 lg:w-96">
              {/* Phone frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19]">
                  <div className="w-full h-full bg-gradient-to-br from-aqua-green-light to-white flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-aqua-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-xl font-bold">AG</span>
                      </div>
                      <p className="text-gray-600 text-sm">Interface AquaGrid</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -right-4 top-1/4 bg-white rounded-lg shadow-lg p-4 hidden sm:block"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-aqua-green">-40%</div>
                  <div className="text-sm text-gray-600">d'eau économisée</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-4 bottom-1/4 bg-white rounded-lg shadow-lg p-4 hidden sm:block"
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
