import '@/styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }){
  // Header scrolled effect
  useEffect(() => {
    const header = document.querySelector('.header')
    if(!header) return
    const onScroll = () => {
      if(window.scrollY>10){ header.classList.add('scrolled') }
      else { header.classList.remove('scrolled') }
    }
    window.addEventListener('scroll', onScroll, { passive:true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <Component {...pageProps} />
}
