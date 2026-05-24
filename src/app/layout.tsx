import '../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Asarad – Premium Software Agency',
  description: 'Luxury dark UI, Three.js hero, SEO focused, Next.js 15+',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#050507" />
      </head>
      <body className="bg-obsidian text-white min-h-screen flex flex-col">
        <header className="flex items-center justify-between p-4 bg-surface/30 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Assets/logo appbw.png" alt="Asarad Logo" width={40} height={40} />
            <span className="font-display text-xl">Asarad</span>
          </Link>
          <nav className="flex gap-4">
            <Link href="/services" className="hover:text-tealGlow">Services</Link>
            <Link href="/faq" className="hover:text-tealGlow">FAQ</Link>
            <Link href="/careers" className="hover:text-tealGlow">Careers</Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="p-4 text-center text-slateGray bg-surface/20">
          © {new Date().getFullYear()} Asarad. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
