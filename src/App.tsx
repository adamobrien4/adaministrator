import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="site-title">adaministrator.dev</h1>
      </header>
      
      <main className="main-content">
        <section className="hero">
          <h2 className="hero-title">Welcome</h2>
          <p className="hero-subtitle">Developer & Creator</p>
        </section>
        
        <section className="about">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              Hello! I'm a developer passionate about building great software and solving interesting problems.
              I enjoy working with modern technologies and creating clean, efficient solutions.
            </p>
            <p>
              This is my portfolio site where I'll be sharing my work and thoughts on development,
              technology, and other topics that interest me.
            </p>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} adaministrator.dev</p>
      </footer>
    </div>
  )
}

export default App

