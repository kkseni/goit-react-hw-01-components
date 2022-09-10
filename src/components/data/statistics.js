export default function Statistics({ label, statistics }) {
    return(
    <section className = "statistics">
  <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                {statistics.map((elem) => {
                    return <li className="item">
    <span className="label">{elem.label} </span>
      <span className="percentage">{elem.percentage}</span>
    </li>}) }
    
  </ul>
</section>)}