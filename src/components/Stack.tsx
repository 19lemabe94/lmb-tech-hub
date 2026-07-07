import { motion } from 'framer-motion';
import { Icon } from './Icon';

export function Stack() {
  const stackData = [
    {
      category: "Frontend & UI",
      items: [
        { name: "JavaScript", label: "JavaScript" },
        { name: "TypeScript", label: "TypeScript" },
        { name: "React", label: "React" },
        { name: "TailWInd", label: "Tailwind CSS" },
        { name: "Vite", label: "Vite" }
      ]
    },
    {
      category: "Backend & Core",
      items: [
        { name: "node", label: "Node.js" },
        { name: "Python", label: "Python" },
        { name: "Java", label: "Java" },
        { name: "RestAPI", label: "Rest API" }
      ]
    },
    {
      category: "Data & Architecture",
      items: [
        { name: "PostgreSQL", label: "PostgreSQL" },
        { name: "Supabase", label: "Supabase" },
        { name: "Pandas", label: "Pandas" },
        { name: "KafKA", label: "Kafka" },
        { name: "Airbyte", label: "Airbyte" },
        { name: "AirFlow", label: "Airflow" },
        { name: "Databricks", label: "Databricks" },
        { name: "SnowFlake", label: "Snowflake" },
        { name: "AWS", label: "AWS" },
        { name: "Vercel", label: "Vercel" },
        { name: "PowerBI", label: "PowerBI" },
        { name: "Looker", label: "Looker" }
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 bg-stone-100 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-stone-900 uppercase tracking-tight mb-4">
            Technology Stack
          </h2>
          <div className="w-16 h-1 bg-amber-700"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stackData.map((group) => (
            <div key={group.category} className="space-y-6">
              <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                {group.category}
              </h3>
              
              <div className="space-y-4">
                {group.items.map((tech) => (
                  <motion.div
                    key={tech.label}
                    whileHover={{ x: 10 }} // Desliza suavemente para a direita
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-8 h-8 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                       <Icon name={tech.name as any} className="w-6 h-6 text-stone-800" />
                    </div>
                    {/* Sombra no texto aplicada via classe customizada shadow-text */}
                    <span className="font-bold text-stone-700 text-sm tracking-wide [text-shadow:0_1px_2px_rgba(0,0,0,0.1)] group-hover:[text-shadow:0_2px_4px_rgba(217,119,6,0.3)] transition-all">
                      {tech.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}