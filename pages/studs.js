import Header from '@/components/Header'

export default function Studs(){
  return (
    <div>
      <Header/>
      <main className="wrapper" style={{paddingTop:128, overflow:'auto'}} id="jax">
        <div className="slide" style={{paddingTop:24}}>
          <div className="card">
            <h1>Jax — Stud (Open)</h1>
            <img src="/images/JAX.png" alt="Jax"/>
            <div className="meta" style={{marginTop:10}}>
              <b>Color:</b> Lilac Tri / Champagne Tri • <b>Weight:</b> 105 lbs • <b>Birthday:</b> May 14, 2022
            </div>
            <div className="buttons">
              <a className="btn primary" href="https://cash.app/$Teooooooo" target="_blank" rel="noopener">$1000 Stud Reservation (CashApp)</a>
              <a className="btn" href="https://instagram.com/leagueofbullies" target="_blank" rel="noopener">DM @leagueofbullies</a>
              <a className="btn" href="mailto:leagueofbullies@gmail.com?subject=Jax%20Stud%20Inquiry">Email</a>
            </div>
            <div className="grid" style={{marginTop:10, gridTemplateColumns:'1fr 1fr'}}>
              <div className="tile"><img src="/images/qr_cashapp.png" alt="CashApp QR"/></div>
              <div className="tile"><img src="/images/qr_zelle.png" alt="Zelle QR"/></div>
            </div>
            <p className="small">Also accepts Zelle: <b>TeoVel@icloud.com</b></p>
          </div>
        </div>
      </main>
    </div>
  )
}
