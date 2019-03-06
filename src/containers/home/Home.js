/* Import Core Libraries */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class HomeComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render() {
    // const { fetchingHomeData, fetchedHomeData, homeData, homeDataError } = this.props;
    return (
      <div className="home">
        HEY
      </div>
    )
  }
}

HomeComponent.propTypes = {
  homeData: PropTypes.object,
}

HomeComponent.defaultProps = {
  homeData: {},
};
