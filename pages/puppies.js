import Header from '@/components/Header'
import { useEffect } from 'react'

export default function Puppies(){
  useEffect(() => {
    const lightbox = document.querySelector('.lightbox')
    const enlarged = lightbox?.querySelector('img')
    document.querySelectorAll('.tile img').forEach(img => {
      img.addEventListener('click', () => {
        if(!lightbox || !enlarged) return
        lightbox.classList.add('show')
        enlarged.src = img.src
      })
    })
    lightbox?.addEventListener('click', ()=> lightbox.classList.remove('show'))
    return () => {}
  }, [])

  return (
    <div>
      <Header/>
      <div className="wrapper" style={{paddingTop:128, overflow:'auto'}}>
        <div className="slide" style={{paddingTop:24}}>
          <div className="card">
            <h1>Puppies — Jax × Asia</h1>
            <div className="grid3">
              <div className="tile"><img src="/images/puppies1.jpg" alt="Puppies 1"/></div>
              <div className="tile"><img src="/images/puppies2.png" alt="Puppies 2"/></div>
              <div className="tile"><img src="/images/puppies3.jpg" alt="Puppies 3"/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="lightbox"><img alt="enlarged"/></div>
    </div>
  )
}
