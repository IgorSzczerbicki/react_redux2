import React, { Component } from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index'

class Counter extends Component {

	render () {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
				<CounterControl label="Add 9" clicked={this.props.onAddCounter}  />
				<CounterControl label="Subtract 9" clicked={this.props.onSubtractCounter}  />
				<hr/>
				<button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
				<ul>
					{this.props.results.map( res => (
						<li key = {res.id} onClick={() => this.props.onDeleteResult(res.id)}>{res.value}</li>
				))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.ctr.counter,
		results: state.res.results
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch(actionCreators.increment()),
		onAddCounter: () => dispatch(actionCreators.add(9)),
		onDecrementCounter: () => dispatch(actionCreators.decrement()),
		onSubtractCounter: () => dispatch(actionCreators.subtract(9)),
		onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
		onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);