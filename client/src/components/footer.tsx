import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { SiWhatsapp, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <img 
                src="/assets/aquagrid-logo.svg" 
                alt="AquaGrid" 
                className="h-8 w-auto filter invert"
              />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 mb-4 max-w-md"
            >
              Révolutionnons ensemble l'irrigation agricole grâce à l'intelligence artificielle. 
              Pour une agriculture plus durable et plus rentable.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              <a href="https://linkedin.com/in/mohamed-zaidi" 
                 className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                 target="_blank"
                 rel="noopener noreferrer">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/33753482970" 
                 className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                 target="_blank"
                 rel="noopener noreferrer">
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a href="mailto:contact@aquagrid.fr" 
                 className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
          
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div>
                <Mail className="w-4 h-4 inline mr-2" />
                <a href="mailto:contact@aquagrid.fr" 
                   className="hover:text-white transition-colors duration-200">
                  contact@aquagrid.fr
                </a>
              </div>
              <div>
                <Phone className="w-4 h-4 inline mr-2" />
                <a href="tel:+33753482970" 
                   className="hover:text-white transition-colors duration-200">
                  +33 7 53 48 29 70
                </a>
              </div>
              <div>
                <SiWhatsapp className="w-4 h-4 inline mr-2 text-green-400" />
                <a href="https://wa.me/33753482970" 
                   className="hover:text-green-400 transition-colors duration-200"
                   target="_blank"
                   rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <div className="space-y-3 text-gray-400">
              <div>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Mentions légales
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Politique de confidentialité
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Conditions d'utilisation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>© 2025 AquaGrid. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
}
