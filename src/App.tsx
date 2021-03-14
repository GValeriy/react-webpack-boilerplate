import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionCreators from './redux/actions/actionCreators';

const App = props => {
    return(
        <div className="App">
          <h1> Hello, World! </h1>
          <div>
            <button onClick={props.incrementAsyncCount}>+</button>
              Count: {props.counterReducer}
            <button onClick={props.decrementCount}>-</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);