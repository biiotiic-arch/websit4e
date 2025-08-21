export default function Header() {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-primary">League of Bullies</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:text-secondary">Home</a>
        <a href="/studs" className="hover:text-secondary">Studs</a>
        <a href="/puppies" className="hover:text-secondary">Puppies</a>
        <a href="/breedings" className="hover:text-secondary">Breedings</a>
        <a href="/contact" className="hover:text-secondary">Contact</a>
      </nav>
    </header>
  )
}
