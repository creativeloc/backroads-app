import { tours } from "../data"
import Headings from "./Headings"

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Headings heading="featured" subHeading="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const {
            id,
            image,
            imgAlt,
            date,
            title,
            info,
            location,
            duration,
            cost
          } = tour
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={imgAlt} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
