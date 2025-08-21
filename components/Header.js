export default function Header(){
  return (
    <header className="header">
      <a href="/" className="brand" aria-label="Home" style={{position:'absolute', left:12}}>
        <img src="/images/logo1.png" alt="League of Bullies Logo" />
      </a>
      <div className="right">
        <a className="btn ig" href="https://instagram.com/leagueofbullies" target="_blank" rel="noopener">
          <img className="icon" src="/icons/instagram.svg" alt="IG"/>@leagueofbullies
        </a>
        <a className="btn ig" href="https://instagram.com/33" target="_blank" rel="noopener">
          <img className="icon" src="/icons/instagram.svg" alt="IG"/>@33
        </a>
        <a className="tel" href="tel:+13477203314">(347) 720-3314</a>
        <a className="tel" href="tel:+19735194175">(973) 519-4175</a>
      </div>
    </header>
  )
}
