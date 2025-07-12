import { motion } from "framer-motion";
import { DollarSign, Sprout, Clock } from "lucide-react";

export default function ImpactSection() {
  const stats = [
    { value: "-40%", label: "Consommation d'eau réduite en moyenne" },
    { value: "100%", label: "Système autonome après installation" },
    { value: "2h", label: "Installation simple par nos experts" },
    { value: "24/7", label: "Surveillance continue de vos cultures" }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Économies garanties",
      description: "Réduisez vos coûts d'irrigation dès le premier mois"
    },
    {
      icon: Sprout,
      title: "Meilleurs rendements",
      description: "Optimisez la croissance de vos cultures"
    },
    {
      icon: Clock,
      title: "Temps libéré",
      description: "Automatisation complète de l'irrigation"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-aqua-green to-aqua-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Des résultats qui parlent d'eux-mêmes
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Rejoignez les agriculteurs qui ont déjà transformé leurs pratiques d'irrigation avec AquaGrid
          </p>
        </motion.div>
        
        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/90 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <benefit.icon className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/90">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
