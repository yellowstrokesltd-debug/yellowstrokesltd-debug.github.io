import { ReactNode } from 'react';
import { Navigation } from './navigation';
import { Footer } from './footer';
import { PageTransition } from './PageTransition';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
