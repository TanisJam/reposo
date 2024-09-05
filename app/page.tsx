import { Hero } from '@/molecules/Hero';
import { Discord } from '@/atoms/Icons';
import { Section } from '@/molecules/Section';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between container mx-auto">
      <Hero />

      <Section className="letter rotate-1 text-rose-950" title="La Historia de Eradrin">
        <p className="text-lg mb-4">
          Eradrin, un viejo enano aventurero, compró una posada abandonada en
          Silverymoon. Con determinación y visión, la transformó en el hogar de
          un nuevo y emocionante gremio de aventureros.
        </p>
        <p className="text-lg">
          Ahora, La Posada del Enano Errante es el punto de partida para
          incontables historias épicas y el lugar donde los héroes se reúnen
          para compartir sus hazañas.
        </p>
      </Section>

      <Section className="letter rotate-0 text-yellow-900" title="Estilo West Marches">
        <p className="text-lg mb-4">
          Nuestro servidor sigue el estilo West Marches, donde tú decides cuándo
          y con quién aventurarte. Explora un mundo abierto, forma grupos
          dinámicos y crea tu propia leyenda.
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>Flexibilidad para jugar cuando quieras</li>
          <li>Grupos cambiantes de aventureros</li>
          <li>Un mundo persistente que evoluciona con tus acciones</li>
          <li>Libertad para explorar y crear tu propia historia</li>
        </ul>
      </Section>

      <Section
        className="letter -rotate-1 text-teal-900"
        title="Características del Servidor"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            Dice6
            <h3 className="text-xl font-semibold mb-2">Aventuras Épicas</h3>
            <p>
              Misiones emocionantes y desafíos únicos te esperan en cada sesión.
            </p>
          </div>
          <div className="text-center">
            Users
            <h3 className="text-xl font-semibold mb-2">Comunidad Acogedora</h3>
            <p>
              Únete a una comunidad amigable de jugadores apasionados por el
              rol.
            </p>
          </div>
          <div className="text-center">
            Scrol
            <h3 className="text-xl font-semibold mb-2">Lore Rico</h3>
            <p>
              Sumérgete en un mundo lleno de historias, misterios y magia por
              descubrir.
            </p>
          </div>
        </div>
      </Section>

      <Section className="letter rotate-0 text-blue-900" title="¿Listo para la Aventura?">
        <p className="text-xl text-center mb-8">
          Únete a nuestro servidor de Discord y comienza tu leyenda hoy mismo.
        </p>
        <button className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-8 py-3 rounded-full text-lg flex items-center mx-auto">
          <Discord className="w-6 h-6 mr-2" />
          Unirse al Servidor
        </button>
      </Section>
    </main>
  );
}
