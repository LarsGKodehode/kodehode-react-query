// pretends this is a full webpage / application
function LandingPage() {
  return (
    <>
      <header className="">
        <img src="./myLogo.jpg" alt="my logo" />

        <nav>
          <ul>
            <a href="#Top">Top</a>
            <a href="#Info">Info</a>
            <a href="#Contact">Contact</a>
          </ul>
        </nav>
      </header>

      <main>
        <FantasticHeroComponent />

        <section>
          <h2>This is the hero section</h2>
        </section>

        <SectionWithBackground
          background="img.jpg"
          content={
            <section>
              <h2>These are my skills</h2>
            </section>
          }
        />

        <section>
          <h2>These are my skills</h2>
        </section>

        <section>
          <h2>These are my projects</h2>
        </section>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default LandingPage