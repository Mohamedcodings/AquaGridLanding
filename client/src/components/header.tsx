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
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* Logo SVG */}
              <svg width="40" height="40" viewBox="0 0 40 40" className="drop-shadow-sm">
                {/* Background circle with gradient */}
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient id="dropGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                  </linearGradient>
                </defs>
                
                {/* Background */}
                <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
                
                {/* Grid pattern */}
                <g stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none">
                  <line x1="8" y1="12" x2="32" y2="12" />
                  <line x1="8" y1="20" x2="32" y2="20" />
                  <line x1="8" y1="28" x2="32" y2="28" />
                  <line x1="12" y1="8" x2="12" y2="32" />
                  <line x1="20" y1="8" x2="20" y2="32" />
                  <line x1="28" y1="8" x2="28" y2="32" />
                </g>
                
                {/* Water drops */}
                <ellipse cx="16" cy="15" rx="2" ry="3" fill="url(#dropGradient)" />
                <ellipse cx="24" cy="18" rx="1.5" ry="2.5" fill="url(#dropGradient)" />
                <ellipse cx="20" cy="25" rx="2.5" ry="3.5" fill="url(#dropGradient)" />
                
                {/* Highlight */}
                <circle cx="20" cy="20" r="17" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">AquaGrid</span>
              <span className="text-xs text-gray-500 font-medium -mt-1">Smart Irrigation</span>
            </div>
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
