import Link from "next/link";

export default function DashboardPage() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Navigasi utama">
        <Link className="wordmark" href="/">MRA<span>.</span></Link>
        <Link className="text-link" href="/login">Masuk</Link>
      </nav>
      <section className="auth-wrap wrap">
        <div className="dashboard-card">
          <p className="eyebrow">PLAYER DASHBOARD · PREVIEW</p>
          <h1>Dashboard belum terhubung.</h1>
          <p>Profil pemain, pertandingan, dan statistik belum tersedia. Halaman ini hanya penanda antarmuka, bukan data akun atau hasil pertandingan.</p>
          <Link className="button" href="/">Kembali ke beranda</Link>
        </div>
      </section>
    </main>
  );
}
