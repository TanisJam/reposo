import { Hero } from '@/molecules/Hero';
import { Section } from '@/molecules/Section';
import { FeatureGrid } from '@/molecules/FeatureGrid';
import { FinalCTA } from '@/molecules/FinalCTA';
import { StickyCTA } from '@/atoms/StickyCTA';
import {
  D20_1,
  Explorer,
  Group,
  Hourglass,
  Scroll,
  Tree,
  Wizard,
} from '@/atoms/Icons';

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Hero />

      {/* HISTORIA */}
      <Section
        id="story"
        eyebrow="Capítulo I"
        title="La Historia de Eradrin"
        tilt={-1}
      >
        <div className="space-y-6 text-base sm:text-lg leading-relaxed">
          <p className="first-letter:text-6xl first-letter:font-bona_nova first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-ember-700">
            Eradrin, un viejo enano aventurero curtido por mil caminos, llegó a
            Silverymoon con el bolsillo vacío y los ojos llenos de historias.
            Compró una posada abandonada — paredes torcidas, vigas podridas, un
            cuervo viejo en el techo — y la transformó con martillo, terquedad
            y una visión.
          </p>
          <p>
            Hoy, El Reposo del Cuervo es el punto de partida de incontables
            leyendas. Aquí los héroes se encuentran, comparten cerveza tibia y
            secretos peligrosos, y parten hacia los rincones oscuros del mundo.
          </p>
          <p className="text-center pt-6 italic text-ember-700/80 font-bona_nova text-xl">
            &mdash; Y vos, ¿qué historia vas a contar? &mdash;
          </p>
        </div>
      </Section>

      {/* WEST MARCHES */}
      <Section
        eyebrow="Capítulo II"
        title="Estilo West Marches"
        tilt={1}
      >
        <p className="text-base sm:text-lg mb-8 leading-relaxed text-center">
          No hay calendario. No hay grupos fijos. Vos decidís cuándo y con
          quién aventurarte. El mundo está vivo, y te espera.
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5 text-base">
          <li className="flex items-start gap-3 group">
            <Hourglass className="w-7 h-7 min-w-7 fill-ember-700 mt-0.5 group-hover:fill-ember-500 transition-colors" />
            <span>
              <strong className="text-wood-800">Flexibilidad total</strong> — jugá
              cuando puedas, no cuando un schedule lo diga
            </span>
          </li>
          <li className="flex items-start gap-3 group">
            <Group className="w-7 h-7 min-w-7 fill-ember-700 mt-0.5 group-hover:fill-ember-500 transition-colors" />
            <span>
              <strong className="text-wood-800">Grupos cambiantes</strong> —
              forjá vínculos en la mesa, no en una hoja de cálculo
            </span>
          </li>
          <li className="flex items-start gap-3 group">
            <Tree className="w-7 h-7 min-w-7 fill-ember-700 stroke-ember-700 mt-0.5 group-hover:fill-ember-500 transition-colors" />
            <span>
              <strong className="text-wood-800">Mundo persistente</strong> — tus
              acciones cambian Faerûn de verdad
            </span>
          </li>
          <li className="flex items-start gap-3 group">
            <Explorer className="w-7 h-7 min-w-7 fill-ember-700 mt-0.5 group-hover:fill-ember-500 transition-colors" />
            <span>
              <strong className="text-wood-800">Libertad de explorar</strong> —
              tu leyenda la escribís vos
            </span>
          </li>
        </ul>
      </Section>

      {/* FEATURES — full bleed dark grid */}
      <FeatureGrid
        eyebrow="Capítulo III"
        title="Lo que vas a encontrar"
        items={[
          {
            icon: <D20_1 className="w-16 h-16 fill-current" />,
            title: 'Aventuras Épicas',
            body:
              'Misiones únicas, peligros reales y consecuencias que pesan. Cada sesión deja marca en el mundo.',
          },
          {
            icon: <Wizard className="w-16 h-16 fill-current stroke-current" />,
            title: 'Comunidad Acogedora',
            body:
              'Una mesa donde se ríe, se rolea y se respeta. Vengas con experiencia o sin ella, hay lugar para vos.',
          },
          {
            icon: <Scroll className="w-16 h-16 fill-current" />,
            title: 'Lore Vivo',
            body:
              'Faerûn como base, pero llena de homebrew, secretos y rumores que solo descubrirás aventurándote.',
          },
        ]}
      />

      {/* FINAL CTA */}
      <FinalCTA />

      {/* Sticky Discord button */}
      <StickyCTA />
    </main>
  );
}
