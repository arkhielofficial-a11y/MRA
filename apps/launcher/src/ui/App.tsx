export default function App() {
  return (
    <main className="launcher">
      <aside className="sidebar">
        <a className="brand" href="/">MRA<span>.</span></a>
        <p className="sidebar-label">YOUR ARENA</p>
        <a className="side-link active" href="#home"><span>◈</span> Home</a>
        <a className="side-link disabled" href="#library" aria-disabled="true"><span>▧</span> Game library</a>
        <a className="side-link disabled" href="#settings" aria-disabled="true"><span>⚙</span> Settings</a>
        <div className="sidebar-bottom">
          <span className="status-dot" /> FOUNDATION PREVIEW
        </div>
      </aside>
      <section className="main-panel" id="home">
        <header className="topbar"><span>MRA LAUNCHER / 0.1.0</span><span>NOT SIGNED IN</span></header>
        <div className="content">
          <p className="eyebrow">WELCOME TO THE ARENA</p>
          <h1>Your next<br /><span>match starts here.</span></h1>
          <p className="intro">Launcher desktop MRA sedang dalam tahap fondasi. Instalasi dan peluncuran Minecraft belum tersedia.</p>
          <div className="setup-card">
            <div className="setup-icon">M</div>
            <div>
              <strong>Persiapan launcher</strong>
              <p>Autentikasi, instalasi game, dan mod manager belum terhubung.</p>
            </div>
            <span className="tag">IN DEVELOPMENT</span>
          </div>
          <button className="play-button" type="button" disabled>PLAY — BELUM TERSEDIA</button>
          <p className="footnote">Tidak ada koneksi akun atau perubahan file game yang dilakukan.</p>
        </div>
      </section>
    </main>
  );
}
