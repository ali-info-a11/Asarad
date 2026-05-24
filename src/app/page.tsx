import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-b from-surface to-obsidian">
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-tealGlow to-techPurple">
            Asa Rad – Premium Digital Experience
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Cutting‑edge web, mobile, and 3D solutions for elite enterprises.
          </p>
          <Link
            href="/services/web-design"
            className="px-6 py-3 bg-tealGlow rounded-full hover:opacity-90 transition"
          >
            Explore Services
          </Link>
        </div>
        {/* Placeholder for Three.js Hero component – will be added later */}
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-12 bg-surface text-obsidian">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Link href="/services/web-design" className="group p-6 bg-obsidian rounded-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-tealGlow group-hover:text-white">
              Web Design & Development
            </h3>
            <p className="text-sm text-slateGray group-hover:text-white">
              Modern, performant, SEO‑optimized sites built with Next.js and Tailwind.
            </p>
          </Link>
          <Link href="/services/seo" className="group p-6 bg-obsidian rounded-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-tealGlow group-hover:text-white">
              Technical SEO
            </h3>
            <p className="text-sm text-slateGray group-hover:text-white">
              Core‑web‑vitals optimization, schema markup, multilingual SEO.
            </p>
          </Link>
          <Link href="/services/android-ios" className="group p-6 bg-obsidian rounded-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-tealGlow group-hover:text-white">
              Android / iOS Development
            </h3>
            <p className="text-sm text-slateGray group-hover:text-white">
              Cross‑platform native apps with React Native & Swift/Kotlin.
            </p>
          </Link>
          <Link href="/services/graphics" className="group p-6 bg-obsidian rounded-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-tealGlow group-hover:text-white">
              Graphic Design & Branding
            </h3>
            <p className="text-sm text-slateGray group-hover:text-white">
              Premium visual identity, motion graphics, UI kits.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQ & Careers Call‑to‑Action */}
      <section className="py-16 bg-obsidian text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-medium mb-4">Got Questions?</h3>
            <p className="mb-6">Check out our frequently asked questions.</p>
            <Link
              href="/faq"
              className="inline-block px-5 py-2 bg-tealGlow rounded-full hover:opacity-90 transition"
            >
              FAQ
            </Link>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-medium mb-4">Join Our Team</h3>
            <p className="mb-6">We’re hiring passionate engineers and designers.</p>
            <Link
              href="/careers"
              className="inline-block px-5 py-2 bg-techPurple rounded-full hover:opacity-90 transition"
            >
              Careers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
