import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-center space-x-6">
      <Link href="/">Home</Link>
      <Link href="/studs">Studs</Link>
      <Link href="/puppies">Puppies</Link>
      <Link href="/breedings">Breedings</Link>
      <Link href="/contact">Contact</Link>
    </header>
  )
}