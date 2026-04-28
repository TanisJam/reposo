'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  body: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  eyebrow?: string;
  title?: string;
}

export default function FeatureGrid({ items, eyebrow, title }: FeatureGridProps) {
  return (
    <section className="relative w-full px-4 sm:px-8 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          {title && (
            <h2 className="font-junge_regular text-4xl md:text-6xl font-bold headline-glow">
              {title}
            </h2>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative p-8 md:p-10 rounded-sm overflow-hidden cursor-default"
              style={{
                background:
                  'linear-gradient(180deg, rgba(42, 31, 21, 0.7) 0%, rgba(20, 16, 11, 0.85) 100%)',
                border: '1px solid rgba(255, 184, 74, 0.18)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Hover glow */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at top, rgba(255, 156, 32, 0.25) 0%, transparent 60%)',
                }}
              />
              {/* Top warm border accent */}
              <div
                aria-hidden
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember-400/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"
              />

              <div className="relative">
                <div className="mb-6 flex justify-center text-ember-300 group-hover:text-ember-200 transition-colors duration-500 group-hover:scale-110 transform-gpu transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-junge_regular text-2xl text-center mb-3 text-parchment-100">
                  {item.title}
                </h3>
                <p className="text-center text-parchment-300/80 leading-relaxed text-sm">
                  {item.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
