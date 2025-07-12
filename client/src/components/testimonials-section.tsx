import { motion } from "framer-motion";
import { Star } from "lucide-react";
import device1Image from "@assets/device1_1752316731143.jpeg";
import device2Image from "@assets/device2_1752316731144.jpeg";
import device3Image from "@assets/device3_1752316731144.jpeg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Omar",
      location: "Producteur de tomates, Cavaillon",
      text: "Installation rapide ! L'équipe AquaGrid a été d'une efficacité remarquable. Le système fonctionne parfaitement dès le premier jour et me simplifie vraiment la vie.",
      device: "Installation AquaGrid chez Omar",
      image: device1Image
    },
    {
      name: "Laila",
      location: "Viticultrice, Sancerre",
      text: "Enfin une solution qui simplifie mon quotidien ! Plus besoin de courir après les vannes, tout se contrôle depuis mon téléphone. Le support client répond en moins de 30 minutes.",
      device: "Solution AquaGrid chez Laila",
      image: device2Image
    },
    {
      name: "Samir",
      location: "Céréalier, Châlons-en-Champagne",
      text: "Mise en service ultra-rapide et formation claire. AquaGrid a transformé ma façon de travailler - tout est automatisé et je gagne un temps précieux chaque jour.",
      device: "Système AquaGrid chez Samir",
      image: device3Image
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment AquaGrid transforme le quotidien des agriculteurs partout en France
          </p>
        </motion.div>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              {/* Device Image */}
              <div className="h-48 sm:h-56 overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.device}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic text-sm sm:text-base leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
