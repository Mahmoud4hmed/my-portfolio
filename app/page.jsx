'use client';
import Image from 'next/image'
import Hero from './components/hero/Hero'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, []);

  return (
    <main id='topp' className="w-5/6 bg-[var(--secondary)] p-8 border-solid border-2 border-[var(--border)] mx-auto">
      <Header />
      <Hero />
      <hr className='border-solid border-1 border-[var(--border)] my-12' />
      <Main />
      <hr className='border-solid border-1 border-[var(--border)] my-12' />
      <Contact />
      <hr className='border-solid border-1 border-[var(--border)] my-12' />
      <Footer />

      {scroll && 
        <a href="#topp">
          <button className='icon-arrow_up text-xl bg-[var(--scrollButton)] w-12 h-12 rounded-full fixed bottom-8 right-[3%]'></button>
        </a>
      }
    </main>
  )
}
