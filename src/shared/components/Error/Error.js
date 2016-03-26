import React, { Component } from "react";
import Icon                 from "../Icon/Icon";
import { Link }             from "react-router";

class Error404 extends Component {

  render() {

    return (

      <div>
  		  <h1>404: Page not found</h1>
	  	  <p className="lead">Sorry, that page doesn‘t exist.</p>
			  <p>
          <Link to="/home" activeClassName="active" className="o-icon__container">
            <Icon icon="angle-left" />
            Head back home
          </Link>
        </p>
      </div>

    );
  }
}

export default Error404;

