'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Discord } from '@/atoms/Icons';
import { Embers } from '@/atoms/Embers';
import { LINKS } from '@/app/_lib/links';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/assets/reposo-hero.jpeg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Warm color grade — sepia + ember tint */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(255, 156, 32, 0.25) 0%, transparent 55%), linear-gradient(180deg, rgba(20, 16, 11, 0.4) 0%, rgba(13, 10, 7, 0.7) 100%)',
        }}
      />

      {/* Dark overlay scaling with scroll */}
      <motion.div
        aria-hidden
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 pointer-events-none"
        // candlelight vignette
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 55%, rgba(13, 10, 7, 0) 25%, rgba(13, 10, 7, 0.55) 65%, rgba(13, 10, 7, 0.95) 100%)',
          }}
        />
      </motion.div>

      {/* Embers */}
      <Embers count={40} />

      {/* Soft fade into next dark section */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, #0d0a07 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="eyebrow mb-6 animate-flicker"
        >
          Servidor de D&amp;D · West Marches
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-bona_nova font-bold leading-[0.95] tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl headline-glow max-w-5xl"
        >
          El Reposo
          <br />
          del Cuervo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-8 max-w-xl text-base sm:text-lg italic text-parchment-200/90 leading-relaxed font-merriweather"
        >
          La posada está encendida. La cerveza, tibia. Afuera, el bosque
          guarda sus secretos.
          <br />
          <span className="not-italic text-ember-300">
            Una silla te espera junto al fuego.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            target="_blank"
            href={LINKS.discordInvite}
            className="btn btn-ember px-8 h-14 text-base"
          >
            <Discord className="w-5 h-5" />
            Únete al Gremio
          </Link>
          <Link
            href="#story"
            className="btn btn-ghost-warm px-6 h-14 text-base"
          >
            Conocé la posada
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ember-300/70"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase">
            Desliza
          </span>
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-ember-300 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
