
import PropTypes from "prop-types";
import{Table,Thead,Tbody,Td } from "./StyledTransactions"
export default function TransactionHistory({ event, items }) {
    return (
   <Table >
  <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Thead>

  <Tbody>
     {items.map((elem) => {
    return <tr key={elem.id}>
        <Td>{elem.type}</Td>
      <Td>{elem.amount}</Td>
      <Td>{elem.currency}</Td>
    </tr>
    
})}
  </Tbody>
</Table >
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