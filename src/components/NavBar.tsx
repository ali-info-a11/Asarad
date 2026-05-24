import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/Assets/logo appbw.png" alt="Asarad Logo" width={48} height={48} className="object-contain" />
          <span className="text-xl font-semibold text-white">Asarad</span>
        </Link>
        <ul className="flex space-x-6 text-sm font-medium text-gray-300">
          <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
          <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
          <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
          <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
