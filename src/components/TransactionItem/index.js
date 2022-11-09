/* eslint-disable react/no-unknown-property */
// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleteTransaction} = props
  const {id, title, amount, option} = details

  const onClickDeleteBtn = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-items-list">
      <p className="">{title}</p>
      <p className="">{amount}</p>
      <p className="">{option}</p>
      <button
        className="dlt-btn"
        type="button"
        testid="delete"
        onClick={onClickDeleteBtn}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="dlt-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
