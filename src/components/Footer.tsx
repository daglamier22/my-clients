export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="sticky top-[100vh] bg-accent text-accent-foreground text-xl"
    >
      <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        {/* <address>
          <h2>First Last</h2>
          555 Main Way<br></br>
          City, State 12345-5555<br></br>
          Email:{" "}
          <a href="mailto:mail@gmail.com">mail@gmail.com</a>
          <br></br>
          Phone: <a href="tel:+11234567890">(123) 456-7890</a>
        </address> */}
        <div>
          Art designed by{" "}
          <span className="text-primary">
            <a
              href="http://www.freepik.com/"
              target="_blank"
              rel="noreferrer nofollow"
            >
              Freepik
            </a>
          </span>
        </div>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">{year}</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
}
