import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <h1>Contact Us</h1>

      <p>
        Have a question? We'd love to hear from you.
      </p>

      <p>
        Email: hello@yallabuy.com
      </p>

      <Link href="/">
        ← Back to Home
      </Link>
    </main>
  );
}
