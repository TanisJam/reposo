import { Hero } from '@/molecules/Hero';
import { LINKS } from '@/app/_lib/links';
import {
  D20_1,
  Discord,
  Explorer,
  Group,
  Hourglass,
  Scroll,
  Tree,
  Wizard,
} from '@/atoms/Icons';
import { Section } from '@/molecules/Section';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between container mx-auto">
      <Hero />
      <span id="story"></span>
      <Section
        className="letter rotate-1 text-rose-950"
        title="La Historia de Eradrin"
      >
        <p className="text-lg mb-4">
          Eradrin, un viejo enano aventurero, compró una posada abandonada en
          Silverymoon. Con determinación y visión, la transformó en el hogar de
          un nuevo y emocionante gremio de aventureros.
        </p>
        <p className="text-lg">
          Ahora, El Reposo del Cuervo es el punto de partida para
          incontables historias épicas y el lugar donde los héroes se reúnen
          para compartir sus hazañas.
        </p>
      </Section>

      <Section
        className="letter rotate-0 text-yellow-900"
        title="Estilo West Marches"
      >
        <p className="text-lg mb-4">
          Nuestro servidor sigue el estilo West Marches, donde tú decides cuándo
          y con quién aventurarte. Explora un mundo abierto, forma grupos
          dinámicos y crea tu propia leyenda.
        </p>
        <ul className="flex flex-col gap-4 fill-orange-500 text-lg">
          <li className="flex items-center gap-2">
            <Hourglass className="w-6 h-6 min-w-6" />
            <p>Flexibilidad para jugar cuando quieras</p>
          </li>
          <li className="flex items-center gap-2">
            <Group className="w-6 h-6 min-w-6" />
            <p>Grupos cambiantes de aventureros</p>
          </li>
          <li className="flex items-center gap-2">
            <Tree className="w-6 h-6 min-w-6" />
            <p>Un mundo persistente que evoluciona con tus acciones</p>
          </li>
          <li className="flex items-center gap-2">
            <Explorer className="w-6 h-6 min-w-6" />
            <p>Libertad para explorar y crear tu propia historia</p>
          </li>
        </ul>
      </Section>

      <Section
        className="letter -rotate-1 text-teal-900"
        title="Características del Servidor"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <D20_1 className="w-16 h-16 fill-red-700 mx-auto mb-2" />
            <h3 className="text-xl font-semibold mb-2">Aventuras Épicas</h3>
            <p>
              Misiones emocionantes y desafíos únicos te esperan en cada sesión.
            </p>
          </div>
          <div className="text-center">
            <Wizard className="w-16 h-16 fill-violet-700 stroke-violet-700 mx-auto mb-2" />
            <h3 className="text-xl font-semibold mb-2">Comunidad Acogedora</h3>
            <p>
              Únete a una comunidad amigable de jugadores apasionados por el
              rol.
            </p>
          </div>
          <div className="text-center">
            <Scroll className="w-16 h-16 fill-yellow-600  mx-auto mb-2" />
            <h3 className="text-xl font-semibold mb-2">Rico Rico Lore</h3>
            <p>
              Sumérgete en un mundo lleno de historias, misterios y magia por
              descubrir.
            </p>
          </div>
        </div>
      </Section>

      <Section
        className="letter rotate-0 text-blue-900 "
        title="¿Listo para la Aventura?"
      >
        <p className="text-xl text-center mb-8">
          Únete a nuestro servidor de Discord y comienza tu leyenda hoy mismo.
        </p>
        <Link
          target="_blank"
          href={LINKS.discordInvite}
          className="btn btn-primary font-merriweather uppercase text-gray-700 md:mt-2 max-w-52 mx-auto "
        >
          <Discord />
          Únete al Gremio
        </Link>
      </Section>
    </main>
  );
}
