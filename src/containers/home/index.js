import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeComponent from './Home';
import homeActions from './home.actions';

class Home extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <>
        <HomeComponent {...this.props} />
      </>
    )
  }
}

function mapStateToProps(state) {
    const { fetchingHomeData, fetchedHomeData, homeData, homeDataError } = state.home;
  
    return { fetchingHomeData, fetchedHomeData, homeData, homeDataError }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getData: () => dispatch(homeActions.getHomeData()),
    }
  }

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Home);

export default connectedComponent;
