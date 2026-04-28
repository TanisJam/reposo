'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Discord } from '@/atoms/Icons';
import { Embers } from '@/atoms/Embers';
import { LINKS } from '@/app/_lib/links';

export default function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden py-32 md:py-48">
      {/* Background warmth */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(217, 94, 2, 0.22) 0%, rgba(122, 47, 13, 0.1) 35%, transparent 70%)',
        }}
      />
      {/* Hard vignette edges */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(13, 10, 7, 0.7) 80%, #0d0a07 100%)',
        }}
      />

      <Embers count={25} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="eyebrow mb-6"
        >
          La taberna abre sus puertas
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-bona_nova font-bold text-5xl sm:text-6xl md:text-7xl headline-glow leading-[1] mb-8"
        >
          Tu silla
          <br />
          junto al fuego
          <br />
          te espera.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-lg text-parchment-200/80 italic mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Eradrin sirvió otra ronda. El bardo afina su laúd. Solo falta tu
          nombre en el registro del gremio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="flex justify-center"
        >
          <Link
            target="_blank"
            href={LINKS.discordInvite}
            className="btn btn-ember px-10 h-16 text-lg animate-glowPulse"
          >
            <Discord className="w-6 h-6" />
            Únete al Gremio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
