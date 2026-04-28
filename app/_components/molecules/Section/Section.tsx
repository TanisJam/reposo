'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  eyebrow?: string;
  tilt?: number;
  id?: string;
}

export default function Section({
  children,
  className = '',
  title,
  eyebrow,
  tilt = 0,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative w-full px-4 sm:px-8 py-20 md:py-32 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60, rotate: tilt - 1 }}
        whileInView={{ opacity: 1, y: 0, rotate: tilt }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full max-w-3xl"
        style={{ transformOrigin: 'center top' }}
      >
        <div className="letter-glow" />
        <div
          className={`letter relative px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20 ${className}`}
        >
          {eyebrow && (
            <p className="eyebrow text-center mb-4 text-ember-700/80">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-junge_regular text-center text-3xl md:text-5xl font-bold mb-10 text-wood-800">
              {title}
              <span className="block w-16 h-px mx-auto mt-5 bg-gradient-to-r from-transparent via-ember-700 to-transparent" />
            </h2>
          )}
          <div className="font-merriweather text-wood-700">{children}</div>
        </div>
      </motion.div>
    </section>
  );
}
