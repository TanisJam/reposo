'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { Discord } from '@/atoms/Icons';
import { LINKS } from '@/app/_lib/links';

export default function StickyCTA() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600, 800], [0, 0, 1]);
  const y = useTransform(scrollY, [0, 600, 800], [40, 40, 0]);
  const scale = useTransform(scrollY, [0, 600, 800], [0.8, 0.8, 1]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        target="_blank"
        href={LINKS.discordInvite}
        aria-label="Únete al Discord"
        className="group flex items-center gap-3 pl-4 pr-5 h-12 rounded-full font-merriweather uppercase tracking-wider text-sm bg-gradient-to-br from-ember-400 to-ember-700 text-wood-900 shadow-lg shadow-ember-700/40 hover:shadow-ember-500/60 hover:scale-105 transition-all duration-300 border border-ember-200/40"
        style={{
          boxShadow:
            '0 10px 30px -8px rgba(217, 94, 2, 0.7), 0 0 60px -10px rgba(255, 156, 32, 0.5)',
        }}
      >
        <Discord className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Únete</span>
      </Link>
    </motion.div>
  );
}
