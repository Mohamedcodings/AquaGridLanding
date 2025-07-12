import { motion } from "framer-motion";
import { Brain, Smartphone, Leaf, CheckCircle } from "lucide-react";
import schedules3Img from "../assets/performance-zones.jpg";
import schedules2Img from "../assets/analytics-screen.jpg";

export default function SolutionSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            L'irrigation intelligente qui révolutionne l'agriculture
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez comment AquaGrid combine capteurs IoT, intelligence artificielle et interface intuitive 
            pour optimiser vos pratiques d'irrigation en temps réel.
          </p>
        </motion.div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-aqua-green-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-aqua-green" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligence Artificielle</h3>
            <p className="text-gray-600">
              Algorithmes avancés qui analysent en continu les conditions météo, 
              l'humidité du sol et les besoins spécifiques de vos cultures.
            </p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-aqua-blue" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Contrôle Mobile</h3>
            <p className="text-gray-600">
              Surveillez et contrôlez vos systèmes d'irrigation depuis n'importe où 
              avec notre application mobile intuitive.
            </p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Durabilité</h3>
            <p className="text-gray-600">
              Réduisez votre empreinte environnementale tout en améliorant 
              la qualité et le rendement de vos cultures.
            </p>
          </motion.div>
        </div>
        
        {/* App Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 sm:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Une application pensée pour les agriculteurs
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-aqua-green rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Gestion par zones</h4>
                    <p className="text-gray-600">Configurez différents programmes pour chaque culture</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-aqua-green rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Assistant IA intégré</h4>
                    <p className="text-gray-600">Recommandations personnalisées en temps réel</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-aqua-green rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Analyses détaillées</h4>
                    <p className="text-gray-600">Suivez votre consommation et optimisez vos pratiques</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dashboard Screenshots */}
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Dashboard Card 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/5 to-transparent"></div>
                  <div className="relative p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance des Zones</h4>
                      <p className="text-sm text-gray-600">Suivi en temps réel de l'efficacité par zone</p>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                      <img 
                        src={schedules3Img} 
                        alt="Performance des zones d'irrigation AquaGrid" 
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </motion.div>
                
                {/* Dashboard Card 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-aqua-blue/5 to-transparent"></div>
                  <div className="relative p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Analytics Avancées</h4>
                      <p className="text-sm text-gray-600">Analyse détaillée de la consommation d'eau</p>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                      <img 
                        src={schedules2Img} 
                        alt="Analytics et suivi d'irrigation AquaGrid" 
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
