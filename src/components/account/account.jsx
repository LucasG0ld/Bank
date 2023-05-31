import PropTypes from "prop-types";
import "./account.css"

function Account({ title, amount, desc }) {

    return (
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{ title }</h3>
          <p className="account-amount">{ amount }</p>
          <p className="account-amount-description">{ desc }</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    )
}

export default Account;

Account.proptype = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired 
}