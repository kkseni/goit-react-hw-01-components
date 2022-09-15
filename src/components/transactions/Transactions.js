
import PropTypes from "prop-types";
export default function TransactionHistory({ event, items }) {
    return (
   <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
     {items.map((elem) => {
    return <tr key={elem.id}>
        <td>{elem.type}</td>
      <td>{elem.amount}</td>
      <td>{elem.currency}</td>
    </tr>
    
})}
  </tbody>
</table>
  )
}
    TransactionHistory.propTypes = {
  elem: PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
};