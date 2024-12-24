import * as motion from 'motion/react-client';
import type { Variants } from 'motion/react';
import { ReactNode, useMemo } from 'react';

interface SectionProps {
  children?: ReactNode;
  className?: string;
  title?: string;
}

export default function Section({ children, className, title }: SectionProps) {
  const cardVariants: Variants = useMemo(
    () => ({
      offscreen: {
        y: 0,
        x: Math.floor(Math.random() * 11) - 5,
        rotate: Math.floor(Math.random() * 7) - 3,
      },
      onscreen: {
        y: -10,
        x: 0,
        rotate: 0,
        transition: {
          type: 'spring',
          bounce: 0.4,
          duration: 0.4,
        },
      },
    }),
    []
  );
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <motion.div
        className={`m-8 py-16 pt-8 px-4 md:px-8 container mx-auto max-w-5xl 
      ${className}`}
        variants={cardVariants}
      >
        <div className="max-w-3xl mx-auto p-8 flex flex-col">
          <h2 className="text-3xl text-center md:text-4xl font-junge_regular font-bold mb-6">
            {title}
          </h2>
          {children}
        </div>
      </motion.div>
    </motion.section>
  );
}
