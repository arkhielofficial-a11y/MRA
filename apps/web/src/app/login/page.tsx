import Link from "next/link";

export default function LoginPage() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Navigasi utama">
        <Link className="wordmark" href="/">MRA<span>.</span></Link>
        <Link className="text-link" href="/">Kembali ke beranda</Link>
      </nav>
      <section className="auth-wrap wrap">
        <div className="auth-card">
          <p className="eyebrow">AKUN MRA</p>
          <h1>Selamat datang.</h1>
          <p>Masuk ke akun MRA untuk melanjutkan.</p>
          <form>
            <label htmlFor="email">Email
              <input id="email" name="email" type="email" autoComplete="email" required />
            </label>
            <label htmlFor="password">Kata sandi
              <input id="password" name="password" type="password" autoComplete="current-password" required />
            </label>
            <button className="button" type="button" disabled>Masuk belum tersedia</button>
          </form>
          <p className="notice">Autentikasi belum terhubung. Jangan masukkan kredensial asli di halaman fondasi ini.</p>
          <p className="auth-switch">Belum punya akun? <Link href="/register">Daftar</Link></p>
        </div>
      </section>
    </main>
  );
}
