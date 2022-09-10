
export default function TransactionHistory({event,items}) {
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
    return <tr>
        <td>{elem.type}</td>
      <td>{elem.amount}</td>
      <td>{elem.currency}</td>
    </tr>
    
})}
  </tbody>
</table>
    )}