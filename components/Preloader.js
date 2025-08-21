import { useEffect, useState } from 'react'

export default function Preloader(){
  const [show, setShow] = useState(false)

  useEffect(() => {
    const seen = typeof window !== 'undefined' ? localStorage.getItem('lob_seen') : '1'
    if(!seen) setShow(true)
  }, [])

  useEffect(() => {
    if(!show) return
    const done = () => {
      setShow(false)
      try{ localStorage.setItem('lob_seen','1') }catch(e){}
    }
    const v = document.querySelector('#preload video')
    let timer
    if(v){
      v.onended = done
      v.onerror = () => { timer = setTimeout(done, 2000) } // fallback if video missing
    } else {
      timer = setTimeout(done, 2000)
    }
    return () => { if(timer) clearTimeout(timer) }
  }, [show])

  if(!show) return null
  return (
    <div id="preload" style={{display:'flex'}}>
      <button className="skip" onClick={()=>{
        try{ localStorage.setItem('lob_seen','1') }catch(e){}
        setShow(false)
      }}>SKIP</button>
      <div className="most-wanted"><a href="/upcoming" style={{textDecoration:'none'}}>ACCEPTING DEPOSITS →</a></div>
      <video src="/videos/preloader.mov" autoPlay muted playsInline />
    </div>
  )
}
