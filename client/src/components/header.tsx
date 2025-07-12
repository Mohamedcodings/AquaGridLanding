import { motion } from "framer-motion";
import { Droplets, Calendar } from "lucide-react";
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
          <div className="flex items-center">
            <img 
              src="/assets/aquagrid-logo.svg" 
              alt="AquaGrid" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>
          
          {/* Contact Buttons */}
          <div className="flex items-center space-x-3">
            {/* WhatsApp Button */}
            <Button
              variant="outline"
              className="hidden sm:flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 border-2 border-green-500 hover:border-green-600 transition-all duration-200"
              onClick={openWhatsApp}
            >
              <SiWhatsapp className="w-5 h-5 mr-2 text-green-500" />
              <span>WhatsApp</span>
            </Button>
            
            {/* Mobile WhatsApp Icon */}
            <Button
              variant="outline"
              size="icon"
              className="sm:hidden text-gray-700 hover:text-green-600 hover:bg-green-50 border-2 border-green-500 hover:border-green-600 transition-all duration-200"
              onClick={openWhatsApp}
            >
              <SiWhatsapp className="w-6 h-6 text-green-500" />
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
