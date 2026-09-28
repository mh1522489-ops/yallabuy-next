import "../page.css";

export default function About() {
  return (
    <main>
      <nav className="navbar">
        <a href="/" className="logo">
          NEXA
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className="about-page">
        <div className="about-content">
          <span>ABOUT NEXA</span>

          <h1>
            We build digital
            <strong> experiences.</strong>
          </h1>

          <p>
            Nexa is a digital technology studio focused on creating
            modern websites and digital products for ambitious
            businesses.
          </p>

          <p>
            We believe great technology should not only look beautiful.
            It should be fast, accessible, easy to use, and built to
            solve real problems.
          </p>

          <a href="/contact" className="btn primary">
            Work With Us
          </a>
        </div>

        <div className="about-card">
          <div className="about-number">01</div>

          <h2>Design</h2>

          <p>
            We create interfaces that are simple, beautiful, and
            centered around the people who use them.
          </p>
        </div>

        <div className="about-card">
          <div className="about-number">02</div>

          <h2>Technology</h2>

          <p>
            We use modern web technologies to build fast and reliable
            digital experiences.
          </p>
        </div>

        <div className="about-card">
          <div className="about-number">03</div>

          <h2>Innovation</h2>

          <p>
            We constantly explore new ideas and technologies to create
            better digital products.
          </p>
        </div>
      </section>

      <footer>
        <div className="logo">NEXA</div>
        <p>© 2026 Nexa. All rights reserved.</p>
      </footer>
    </main>
  );
}


