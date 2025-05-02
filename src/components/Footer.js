import { pageLinks, socialLinks } from "../data"

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link

          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          )
        })}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          const { id, href, icon } = socialLink

          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>

      <p className="copyright">
        Backroads travel tours company &mdash;
        <span id="date">Copyright &copy; {new Date().getFullYear()}</span>{" "}
        &mdash; all rights reserved
      </p>
    </footer>
  )
}
export default Footer
