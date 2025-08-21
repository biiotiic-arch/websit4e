import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Welcome to League of Bullies</h1>
      </main>
    </>
  )
}