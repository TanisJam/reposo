import { ReactNode } from 'react';

interface SectionProps {
  children?: ReactNode;
  className?: string;
  title?: string;
}

export default function Section({ children, className, title }: SectionProps) {
  return (
    <section
      className={`m-8 py-16 px-4 md:px-8 container mx-auto max-w-5xl
 
        ${className}`}
    >
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl text-center md:text-4xl font-junge_regular font-bold mb-6">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
