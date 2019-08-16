import React from "react";
import { RentalCards } from "./RentalCards";

export class RentalList extends React.Component {
  renderRentals() {
    return this.props.rentals.map(rental => {
      return <RentalCards key={rental.id} rental={rental} />;
    });
  }

  render() {
    return (
      <div className="container">
        <section id="rentalListing">
          <div className="row">{this.renderRentals()}</div>
        </section>
      </div>
    );
  }
}
