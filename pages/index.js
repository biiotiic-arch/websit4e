import Header from '@/components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold text-primary">League of Bullies</h1>
        <p className="mt-4 text-lg">Welcome to the official site.</p>
      </main>
    </div>
  )
}
