import Image from 'next/image';
import { Discord } from '@/atoms/Icons';
import { LINKS } from '@/app/_lib/links';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero container">
      <Image
        src="/assets/reposo-hero.jpeg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        width="1392"
        height="915"
        decoding="async"
        data-nimg="1"
        className="w-full rounded-sm pointer-events-none object-cover object-top h-[26rem] sm:h-[43rem]"
      />

      <div className="hero-content text-neutral text-center  min-w-full py-8 sm:p-12 md:p-24">
        <div className="max-w-2xl bg-white/25 backdrop-blur-md p-8 md:px-16 md:py-12 rounded-sm">
          <h1 className="mb-5 text-5xl font-bold font-bona_nova">
            El Reposo del Cuervo
          </h1>
          <p className="mb-5 text-lg font-medium">
            Únete al gremio de aventureros más intrépido de Silverymoon.
            <br /> Forja tu leyenda en nuestro servidor West Marches.
          </p>
          <Link
            target="_blank"
            href={LINKS.discordInvite}
            className="btn btn-primary font-merriweather uppercase text-gray-700 md:mt-2"
          >
            <Discord />
            Únete al Gremio
          </Link>
        </div>
      </div>
    </div>
  );
}
