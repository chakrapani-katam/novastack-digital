import './App.css'

function App() {
  return (
    <div>
      <header>
        <h2>NovaStack Digital</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <h1>
            Professional Websites & Software
            Solutions
          </h1>

          <p>
            We help UK businesses grow with modern
            websites, Python automation, React
            applications and backend development.
          </p>

          <a href="#contact" className="btn">
            Get a Free Quote
          </a>
        </section>

        <section id="services">
          <h2>Our Services</h2>

          <div className="services">
            <article>
              <h3>Website Development</h3>
              <p>
                Modern, responsive websites for
                small businesses.
              </p>
            </article>

            <article>
              <h3>Python Automation</h3>
              <p>
                Automate repetitive tasks and
                improve business efficiency.
              </p>
            </article>

            <article>
              <h3>Backend Development</h3>
              <p>
                Reliable APIs and integrations
                using Python and FastAPI.
              </p>
            </article>

            <article>
              <h3>React Development</h3>
              <p>
                Interactive web applications
                and frontend improvements.
              </p>
            </article>
          </div>
        </section>

        <section id="about">
          <section id="pricing">
  <h2>Our Pricing</h2>
  <p>Affordable website solutions for your business.</p>

  <div className="services">
    <article>
      <h3>Starter Website</h3>
      <h2>From £199</h2>
      <p>Up to 3 pages</p>
      <p>Mobile-friendly design</p>
      <p>Contact information section</p>
      <p>Basic SEO setup</p>
      <a href="#contact" className="btn">
        Get Started
      </a>
    </article>

    <article>
      <h3>Business Website</h3>
      <h2>From £399</h2>
      <p>Up to 5 pages</p>
      <p>Responsive design</p>
      <p>Contact form</p>
      <p>Basic SEO setup</p>
      <a href="#contact" className="btn">
        Get Started
      </a>
    </article>

    <article>
      <h3>Premium Website</h3>
      <h2>From £699</h2>
      <p>Up to 10 pages</p>
      <p>Custom responsive design</p>
      <p>API integration consultation</p>
      <p>Performance optimisation</p>
      <a href="#contact" className="btn">
        Get Started
      </a>
    </article>
  </div>
</section>
          <h2>About NovaStack Digital</h2>
          <p>
            We provide practical software solutions
            for businesses looking to improve their
            online presence and workflows.
          </p>
        </section>

        <section id="contact">
  <h2>Get a Free Project Quote</h2>

  <p>
    Tell us about your project and we'll
    discuss how we can help your business.
  </p>

 <form
  className="contact-form"
  action="https://formsubmit.co/chakrapanik200@gmail.com"
  method="POST"
>
  <input
    type="hidden"
    name="_subject"
    value="New NovaStack Digital Project Enquiry"
  />
  <input
    type="hidden"
    name="_captcha"
    value="true"
  />
    <label htmlFor="client-name">Your Name</label>
    <input
      id="client-name"
      type="text"
      name="name"
      placeholder="Enter your full name"
      required
    />

    <label htmlFor="client-email">Email Address</label>
    <input
      id="client-email"
      type="email"
      name="email"
      placeholder="Enter your email"
      required
    />

    <label htmlFor="client-service">
      Select Service
    </label>
    <select id="client-service" name="service" required>
      <option value="">Choose a service</option>
      <option>Website Development</option>
      <option>Python Automation</option>
      <option>Backend Development</option>
      <option>React Development</option>
    </select>

    <label htmlFor="client-budget">
      Estimated Budget
    </label>
    <select id="client-budget" name="budget" required>
      <option value="">Select your budget</option>
      <option>£100 - £300</option>
      <option>£300 - £500</option>
      <option>£500 - £1,000</option>
      <option>£1,000+</option>
    </select>

    <label htmlFor="client-message">
      Project Details
    </label>
    <textarea
      id="client-message"
      name="message"
      rows="5"
      placeholder="Describe your project..."
      required
    />

    <button type="submit" className="btn">
      Send Enquiry
    </button>
  </form>
</section>
      </main>

      <footer>
        <p>© 2026 NovaStack Digital</p>
      </footer>
    </div>
  )
}

export default App