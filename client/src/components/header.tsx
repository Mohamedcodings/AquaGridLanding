import { motion } from "framer-motion";
import { Droplets, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

// Déclaration TypeScript pour Calendly
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Header() {
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
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-aqua-green to-aqua-green-dark rounded-lg flex items-center justify-center">
              <Droplets className="text-white w-4 h-4" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">AquaGrid</span>
          </div>
          
          {/* Contact Buttons */}
          <div className="flex items-center space-x-3">
            {/* WhatsApp Button */}
            <Button
              variant="ghost"
              className="hidden sm:flex items-center text-gray-700 hover:text-aqua-green"
              onClick={openWhatsApp}
            >
              <MessageSquare className="w-4 h-4 mr-2 text-green-500" />
              <span>WhatsApp</span>
            </Button>
            
            {/* Mobile WhatsApp Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden text-gray-700 hover:text-aqua-green"
              onClick={openWhatsApp}
            >
              <MessageSquare className="w-5 h-5 text-green-500" />
            </Button>
            
            {/* Calendly Button */}
            <Button
              className="bg-aqua-green hover:bg-aqua-green-dark text-white px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
              onClick={openCalendly}
            >
              <Calendar className="w-4 h-4 mr-2 sm:inline hidden" />
              Prendre RDV
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
