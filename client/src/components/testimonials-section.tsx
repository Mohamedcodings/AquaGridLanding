import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Pierre Martin",
      location: "Producteur de tomates, Loire-Atlantique",
      text: "Depuis l'installation d'AquaGrid, j'ai réduit ma consommation d'eau de 45% tout en améliorant la qualité de mes tomates. Le système s'adapte parfaitement aux conditions météo.",
      device: "Dispositif AquaGrid chez Pierre Martin"
    },
    {
      name: "Marie Dubois",
      location: "Viticultrice, Bourgogne",
      text: "L'application mobile est remarquable. Je peux surveiller mes vignes à distance et recevoir des alertes en temps réel. Un gain de temps considérable !",
      device: "Dispositif AquaGrid chez Marie Dubois"
    },
    {
      name: "Jean Leroy",
      location: "Céréalier, Beauce",
      text: "Installation rapide et support technique excellent. Mes cultures céréalières n'ont jamais été aussi bien irriguées. Je recommande vivement AquaGrid.",
      device: "Dispositif AquaGrid chez Jean Leroy"
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
              className="bg-gray-50 rounded-xl p-6 sm:p-8"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                {/* Device photo placeholder - using a generic IoT device image */}
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <div className="w-8 h-8 bg-aqua-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AG</span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
