import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <h2>YallaBuy</h2>

        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>

      <section>
        <h1>Welcome to YallaBuy 🚀</h1>

        <p>
          Discover useful products and make smarter buying decisions.
        </p>

        <Link href="/about">
          Learn More About Us →
        </Link>
      </section>
    </main>
  );
}









