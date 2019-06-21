import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    // this.props.store.dispatch({
    //   type: 'GET_COUNT_OF_ITEMS',
    // });
    this.props.increaseItems()
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    console.log(this.props.items.length)
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return { items: state.items }
}

const mapDispatchToProps = (dispatch) => {
  return {increaseUsers: () => dispatch({type: 'GET_COUNT_OF_USERS'}),
          increaseItems: () => dispatch({type: 'GET_COUNT_OF_ITEMS'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
