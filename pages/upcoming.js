import Header from '@/components/Header'

export default function Upcoming(){
  return (
    <div>
      <Header/>
      <div className="wrapper" style={{paddingTop:128, overflow:'auto'}}>
        <div className="slide" style={{paddingTop:24}}>
          <div className="card">
            <h1>Asia × Exodus — Deposits Open</h1>
            <p className="tagline">Reservation fee: <b>$500</b></p>
            <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
              <div className="tile"><img src="/images/qr_cashapp.png" alt="CashApp QR"/></div>
              <div className="tile"><img src="/images/qr_zelle.png" alt="Zelle QR"/></div>
            </div>
            <div className="buttons" style={{justifyContent:'center'}}>
              <a className="btn primary" href="https://cash.app/$Teooooooo" target="_blank" rel="noopener">Pay via CashApp</a>
              <a className="btn" href="mailto:leagueofbullies@gmail.com?subject=Deposit%20Asia%20x%20Exodus">Email Confirmation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
