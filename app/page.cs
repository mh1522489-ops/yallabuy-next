* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, sans-serif;
  background: #08090d;
  color: #ffffff;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Navbar */

.navbar {
  width: min(1200px, 90%);
  margin: auto;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 3px;
}

.nav-links {
  display: flex;
  gap: 35px;
}

.nav-links a {
  color: #a7a9b4;
  transition: 0.3s;
}

.nav-links a:hover {
  color: #ffffff;
}

/* Hero */

.hero {
  width: min(1200px, 90%);
  min-height: 650px;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 70px;
}

.badge {
  color: #8b5cf6;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
}

.hero h1 {
  margin-top: 20px;
  font-size: clamp(45px, 6vw, 78px);
  line-height: 1;
}

.hero h1 span {
  color: #8b5cf6;
}

.hero p {
  margin-top: 30px;
  max-width: 520px;

  color: #a7a9b4;
  font-size: 18px;
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  margin-top: 35px;
}

.btn {
  padding: 15px 25px;
  border-radius: 8px;
  font-weight: bold;
  transition: 0.3s;
}

.primary {
  background: #8b5cf6;
}

.primary:hover {
  transform: translateY(-3px);
}

.secondary {
  border: 1px solid #30323b;
}

.secondary:hover {
  background: #181a22;
}

.hero-image {
  overflow: hidden;
  border-radius: 25px;
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;

  transition: 0.5s;
}

.hero-image:hover img {
  transform: scale(1.05);
}

/* Stats */

.stats {
  width: min(1200px, 90%);
  margin: 40px auto 100px;

  padding: 35px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  border-top: 1px solid #20222a;
  border-bottom: 1px solid #20222a;
}

.stats div {
  text-align: center;
}

.stats strong {
  display: block;
  font-size: 30px;
}

.stats span {
  display: block;
  margin-top: 8px;
  color: #777a86;
}

/* Services */

.services {
  width: min(1200px, 90%);
  margin: auto;
  padding: 100px 0;
}

.section-heading {
  max-width: 650px;
}

.section-heading > span,
.about > div > span {
  color: #8b5cf6;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
}

.section-heading h2,
.about h2 {
  margin-top: 15px;
  font-size: 45px;
}

.section-heading p {
  margin-top: 20px;
  color: #a7a9b4;
  line-height: 1.7;
}

.service-grid {
  margin-top: 60px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.service-card {
  padding: 35px;

  background: #111218;
  border: 1px solid #20222a;
  border-radius: 15px;

  transition: 0.3s;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: #8b5cf6;
}

.icon {
  font-size: 35px;
  color: #8b5cf6;
}

.service-card h3 {
  margin-top: 25px;
  font-size: 22px;
}

.service-card p {
  margin-top: 15px;
  color: #858894;
  line-height: 1.7;
}

/* About */

.about {
  width: min(1200px, 90%);
  margin: 100px auto;

  padding: 80px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  background: #111218;
  border-radius: 25px;
}

.about h2 span {
  color: #8b5cf6;
}

.about > p {
  align-self: end;

  color: #a7a9b4;
  font-size: 20px;
  line-height: 1.8;
}

/* Footer */

footer {
  width: min(1200px, 90%);
  margin: auto;
  padding: 50px 0;

  display: flex;
  justify-content: space-between;

  border-top: 1px solid #20222a;
}

footer p {
  color: #666975;
}

/* Responsive */

@media (max-width: 800px) {
  .nav-links {
    gap: 15px;
    font-size: 14px;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 60px 0;
  }

  .hero-image {
    order: -1;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .about {
    grid-template-columns: 1fr;
    padding: 40px;
    gap: 30px;
  }

  .section-heading h2,
  .about h2 {
    font-size: 35px;
  }

  footer {
    flex-direction: column;
    gap: 20px;
  }
}

