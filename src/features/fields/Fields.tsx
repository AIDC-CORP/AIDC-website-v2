import React, { useState } from 'react';
import { motion } from 'motion/react';

const fieldTabs = [
  {
    title: 'AI & Data-driven innovation',
    content:
      'AIDC invests in research and development of advanced AI and data-driven solutions. Our offerings include intelligent recognition systems, predictive analytics tools, process automation platforms, and customized R&D services. The goal is to empower businesses to leverage cutting-edge technologies, enhance competitiveness, innovate products and services, expand market presence, and unlock the full potential of their data.',
  },
  {
    title: 'Green agriculture & smart automation',
    content:
      'AIDC develops and delivers AI-powered and smart automation solutions for green agriculture. Our products and services support intelligent farming process management, crop environment monitoring, yield prediction, resource optimization (water, fertilizer, energy), and CO₂ emission control. These solutions help agribusinesses increase productivity, reduce operational costs, achieve sustainable growth, and meet environmental compliance requirements.',
  },
  {
    title: 'Digital transformation & Enterprise solutions',
    content:
      'AIDC provides comprehensive digital transformation solutions, including enterprise management software, data analytics systems, and integration platforms. Our services are designed to help organizations optimize operational efficiency, strengthen data-driven decision-making, enhance customer experience, and improve management agility. At the same time, we enable enterprises to meet governance, regulatory, and industry-specific compliance standards.',
  },
];

const agricultureImages = [
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGFncmljdWx0dXJlJTIwZmFybXxlbnwxfHx8fDE3NjAyNTczMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDI1NzMzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2MDI1NzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
];

export default function Fields() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pt-32 pb-20">
      {/* Section 1 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left - Title */}
            <div className="lg:w-1/2">
              <h2 className="text-[#53bedd]">
                The fields in which we operate are highly sought after and demand a workforce of
                exceptional quality.
              </h2>
            </div>

            {/* Right - Image Grid */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {agricultureImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="aspect-square rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`Green Agriculture ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Tab Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {fieldTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-[#53bedd] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-800 hover:bg-[#53bedd]/20'
                }`}
              >
                <h3 className={activeTab === index ? 'text-white' : 'text-gray-900'}>
                  {tab.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border-2 border-[#53bedd] rounded-2xl p-8 shadow-lg"
          >
            <p className="text-gray-700 leading-relaxed text-lg">{fieldTabs[activeTab].content}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
