
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const products = [
//   {
//     id: 1,
//     title: "AI Camera System",
//     description: "Advanced surveillance system powered by Artificial Intelligence for real-time monitoring and anomaly detection.",
//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 2,
//     title: "Access Control Software",
//     description: "Secure and efficient access control management solution for enterprises of all sizes.",
//     image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//   },
  {
    id: 3,
    title: "Work Mind",
    description: "Automated attendance tracking using facial recognition technology.",
    image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function ProductList() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link to={`/product/${product.id}`} className="text-[#53bedd] font-semibold hover:text-[#2a9cbd] transition-colors inline-block">
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
