import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="p-4">
        <h1 className="text-center text-5xl">Introspect</h1>
        <nav>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/edit">Edit</Link></li>
          <li><Link href="/results">Results</Link></li>
        </nav>
      </header>
    </>
  )
}