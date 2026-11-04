import Link from "next/link";

export default function RegisterPage() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Navigasi utama">
        <Link className="wordmark" href="/">MRA<span>.</span></Link>
        <Link className="text-link" href="/">Kembali ke beranda</Link>
      </nav>
      <section className="auth-wrap wrap">
        <div className="auth-card">
          <p className="eyebrow">MULAI BERMAIN</p>
          <h1>Buat akun.</h1>
          <p>Daftarkan akun MRA untuk mengakses platform.</p>
          <form>
            <label htmlFor="email">Email
              <input id="email" name="email" type="email" autoComplete="email" required />
            </label>
            <label htmlFor="password">Kata sandi
              <input id="password" name="password" type="password" autoComplete="new-password" minLength={12} required />
            </label>
            <button className="button" type="button" disabled>Pendaftaran belum tersedia</button>
          </form>
          <p className="notice">Autentikasi belum diimplementasikan. Formulir ini belum mengirim atau menyimpan data.</p>
          <p className="auth-switch">Sudah punya akun? <Link href="/login">Masuk</Link></p>
        </div>
      </section>
    </main>
  );
}
