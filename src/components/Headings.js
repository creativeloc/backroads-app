const Headings = ({ heading, subHeading }) => {
  return (
    <div className="section-title">
      <h2>
        {heading} <span>{subHeading}</span>
      </h2>
    </div>
  )
}
export default Headings
