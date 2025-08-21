import Header from '@/components/Header'

export default function Contact(){
  return (
    <div>
      <Header/>
      <main className="wrapper" style={{paddingTop:128, overflow:'auto'}}>
        <div className="slide" style={{paddingTop:24}}>
          <div className="card">
            <h1>Contact</h1>
            <p>Email: <a className="btn" href="mailto:leagueofbullies@gmail.com">leagueofbullies@gmail.com</a></p>
            <p>Instagram: <a className="btn" href="https://instagram.com/leagueofbullies" target="_blank" rel="noopener">@leagueofbullies</a></p>
            <p>Phone: <a className="btn" href="tel:+13477203314">(347) 720-3314</a> · <a className="btn" href="tel:+19735194175">(973) 519-4175)</a></p>
          </div>
        </div>
      </main>
    </div>
  )
}
