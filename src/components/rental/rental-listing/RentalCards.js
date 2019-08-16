import React from "react";
import { Link } from "react-router-dom";

export function RentalCards(props) {
  const rental = props.rental;

  return (
    <div className="col-md-3 col-xs-6">
      <Link className="rental-detail-link" to={`/rentals/${rental.id}`}>
        <div className="card bwm-card">
          <img className="card-img-top" src={rental.image} alt={rental.title} />
          <div className="card-block">
            <h6 className={`card-subtitle ${rental.category}`}>
              Whole Apartment &#183; New York
            </h6>
            <h4 className="card-title">{rental.title}</h4>
            <p className="card-text">$240 per Night &#183; Free Cancelation</p>
            <a href="" className="card-link">
              More Info
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
}
