import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Seed Race",
    description:
      "Bersaing di dunia lokal dengan seed dan aturan yang sama. Mode ini sedang dirancang.",
  },
  {
    number: "02",
    title: "Satu arena",
    description:
      "Akun, pertandingan, dan progres kompetitif dirancang terhubung melalui layanan MRA.",
  },
  {
    number: "03",
    title: "Fair play",
    description:
      "Hasil akan divalidasi server; telemetry klien bukan bukti yang otomatis dipercaya.",
  },
];

export default function HomePage() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Navigasi utama">
        <Link className="wordmark" href="/" aria-label="MRA beranda">
          MRA<span>.</span>
        </Link>
        <div className="nav-links">
          <a href="#tentang">Tentang</a>
          <Link className="button button-small button-quiet" href="/login">
            Masuk
          </Link>
          <Link className="button button-small" href="/register">
            Buat akun
          </Link>
        </div>
      </nav>

      <section className="hero wrap" id="tentang">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> COMPETITIVE MINECRAFT</p>
          <h1>Play fair.<br /><span>Race further.</span></h1>
          <p className="hero-description">
            MRA adalah platform kompetitif Minecraft. Bangun strategi, kejar
            waktu, dan tanding di kondisi yang setara.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/register">Mulai perjalanan <span aria-hidden="true">↗</span></Link>
            <a className="text-link" href="#fitur">Kenali MRA <span aria-hidden="true">↓</span></a>
          </div>
          <p className="status-note">Fondasi awal sedang dibangun · Belum ada matchmaking live</p>
        </div>
        <div className="hero-art" aria-label="Ilustrasi arena kompetitif MRA" role="img">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="arena-card">
            <span className="card-kicker">MRA / SEASON 00</span>
            <span className="arena-mark">M<span>R</span>A</span>
            <span className="arena-line" />
            <span className="arena-caption">THE ARENA IS YOURS</span>
          </div>
          <span className="art-coordinate coordinate-one">01 — SEED RACE</span>
          <span className="art-coordinate coordinate-two">JAVA EDITION</span>
        </div>
      </section>

      <section className="feature-section" id="fitur">
        <div className="wrap">
          <div className="section-heading">
            <p className="eyebrow">DIBANGUN UNTUK KOMPETISI</p>
            <h2>Lebih dari sekadar<br />siapa yang tercepat.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer wrap">
        <Link className="wordmark" href="/">MRA<span>.</span></Link>
        <p>Fondasi produk · Fitur kompetitif belum tersedia</p>
        <span>© MRA</span>
      </footer>
    </main>
  );
}
