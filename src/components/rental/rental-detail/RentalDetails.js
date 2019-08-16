import React from "react";
import { connect } from "react-redux";

import * as actions from "../../../actions";

class RentalDetails extends React.Component {
  componentWillMount() {
    const rentalId = this.props.match.params.id;
    console.log("rentalId yay h ", rentalId);
    this.props.dispatch(actions.fecthRentalBYId(rentalId));
  }

  render() {
    // const rental = this.props.rental;
    return (
      <div>
        {/* <h1>{rental.title}</h1>
        <h1>{rental.city}</h1>
        <h1>{rental.description}</h1> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rental: state.rental.data
  };
}

export default connect(mapStateToProps)(RentalDetails);
