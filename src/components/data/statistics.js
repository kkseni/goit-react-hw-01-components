import PropTypes from "prop-types";
export default function Statistics({ label, statistics }) {
    return(
    <section className = "statistics">
  <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                {statistics.map((elem) => {
                    return <li className="item" key={elem.id}>
    <span className="label">{elem.label} </span>
      <span className="percentage">{elem.percentage}</span>
    </li>}) }
    
  </ul>
    </section>)
}
Statistics.propTypes = {
  elem: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
  }) 
};