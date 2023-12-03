import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-5/6 bg-[var(--secondary)] p-8 border-solid border-2 border-[var(--border)] mx-auto">
      <Header />
      <hr className='border-solid border-1 border-[var(--border)] my-12' />
      <Hero />
      <hr className='border-solid border-1 border-[var(--border)] my-12' />
      <Main />
      <hr className='border-solid border-1 border-[var(--border)] my-12' />
      <Contact />
      <hr className='border-solid border-1 border-[var(--border)] my-12' />
      <Footer />
    </main>
  )
}
