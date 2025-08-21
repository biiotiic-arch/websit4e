import { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'
import Preloader from '@/components/Preloader'

export default function Home(){
  const [current, setCurrent] = useState(0)
  const slidesRef = useRef(null)
  const total = 3

  const go = (i) => {
    const next = Math.max(0, Math.min(total-1, i))
    setCurrent(next)
    if(slidesRef.current){
      slidesRef.current.style.transform = `translateX(-${next*100}%)`
    }
  }
  const goNext = () => go(current+1)
  const goPrev = () => go(current-1)

  useEffect(() => {
    const slides = slidesRef.current
    let startX = null
    if(!slides) return
    const onTouchStart = (e)=>{ startX = e.touches[0].clientX }
    const onTouchMove = (e)=>{
      if(startX===null) return
      let dx = e.touches[0].clientX - startX
      if(Math.abs(dx)>60){ dx<0?goNext():goPrev(); startX=null }
    }
    slides.addEventListener('touchstart', onTouchStart, {passive:true})
    slides.addEventListener('touchmove', onTouchMove, {passive:true})
    return () => {
      slides.removeEventListener('touchstart', onTouchStart)
      slides.removeEventListener('touchmove', onTouchMove)
    }
  }, [current])

  return (
    <div>
      <Header/>
      <Preloader/>
      <div className="wrapper">
        <button className="arrow left" onClick={goPrev}>&#10094;</button>
        <button className="arrow right" onClick={goNext}>&#10095;</button>
        <div className="slides" ref={slidesRef}>
          {/* Slide 1: Hero */}
          <section className="slide">
            <div className="card">
              <h1>League of Bullies</h1>
              <p className="tagline">Premium Bully Breeding</p>
              <img src="/images/UPCOMING_BREEDING_ASIA_X_EXODUS.jpg" alt="Asia × Exodus collage"/>
              <div className="buttons" style={{justifyContent:'center', marginTop:14}}>
                <a className="btn primary" href="/puppies">Puppies</a>
                <a className="btn" onClick={()=>go(1)} href="#pack">Our Pack</a>
                <a className="btn" onClick={()=>go(2)} href="#breedings">Upcoming Breedings</a>
              </div>
            </div>
          </section>
          {/* Slide 2: Our Pack */}
          <section id="pack" className="slide">
            <div className="card">
              <h1>Our Pack</h1>
              <div className="grid">
                <article className="dog">
                  <img src="/images/JAX.png" alt="Jax"/>
                  <div className="body">
                    <div className="badge open">Open</div>
                    <h3>Jax</h3>
                    <div className="meta">Lilac Tri / Champagne Tri<br/>105 lbs • Birthday: May 14, 2022</div>
                    <div className="buttons">
                      <a className="btn primary" href="/studs#jax">Stud Page</a>
                    </div>
                  </div>
                </article>
                <article className="dog">
                  <img src="/images/ASIA.png" alt="Asia"/>
                  <div className="body">
                    <div className="badge">Dam</div>
                    <h3>Asia</h3>
                    <div className="meta">Lilac Tri / Champagne Tri<br/>105 lbs • 20.5 in<br/>Birthday: June 22, 2023</div>
                  </div>
                </article>
                <article className="dog">
                  <img src="/images/Capone1.png" alt="Capone"/>
                  <div className="body">
                    <div className="badge">Sire</div>
                    <h3>Capone</h3>
                    <div className="meta">Lilac Tri / Champagne Tri<br/>80 lbs • Birthday: Feb 10, 2025</div>
                  </div>
                </article>
                <article className="dog">
                  <img src="/images/MS.EUROPE.png" alt="Ms.Europe"/>
                  <div className="body">
                    <div className="badge">Dam</div>
                    <h3>Ms.Europe</h3>
                    <div className="meta">Lilac Tri / Champagne Tri<br/>75 lbs • Birthday: Feb 10, 2025</div>
                  </div>
                </article>
              </div>
            </div>
          </section>
          {/* Slide 3: Upcoming Breedings */}
          <section id="breedings" className="slide">
            <div className="card">
              <h1 style={{fontWeight:900, textAlign:'center'}}>Upcoming Breedings</h1>
              <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
                <img src="/images/ASIA.png" alt="Asia"/>
                <img src="/images/UPCOMING_BREEDING_ASIA_X_EXODUS.jpg" alt="Exodus"/>
              </div>
              <h2 style={{marginTop:12}}>Asia × Exodus</h2>
              <div className="meta">
                <b>Asia:</b> 105 lbs • 20.5 in • Lilac Tri / Champagne Tri • Birthday: June 22, 2023<br/>
                <b>Exodus:</b> 135+ lbs • 2 years • Chocolate Tri • Owner: <a href="https://instagram.com/levelupbullies416" target="_blank" rel="noopener">@levelupbullies416</a>
              </div>
              <div className="buttons">
                <a className="btn primary" href="mailto:leagueofbullies@gmail.com?subject=Asia%20x%20Exodus%20Inquiry">Inquire via Email</a>
                <a className="btn" href="https://instagram.com/leagueofbullies" target="_blank" rel="noopener">Instagram</a>
                <a className="btn" href="https://cash.app/$Teooooooo" target="_blank" rel="noopener">CashApp ($500 Reservation)</a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="footer small">© League of Bullies — SEASON 1</footer>
    </div>
  )
}
