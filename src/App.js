import React from "react";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Header } from "../src/shared/Header";
import RentalListing from "../src/components/rental/rental-listing/RentalListing";
import RentalDetails from "../src/components/rental/rental-detail/RentalDetails";
import "./app.scss";

const store = require("./reducers/").init();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route exact path="/" render={() => <Redirect to="/rentals" />} />
            <Route exact path="/rentals" component={RentalListing} />
            <Route exact path="/rentals/:id" component={RentalDetails} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
