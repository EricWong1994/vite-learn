import { Component } from 'react';
import { connectStillness } from 'react-stillness-component';

class Count extends Component {
	state = {
		count: 0,
	};

	render() {
		const { isStillness, stillnessId, ...rest } = this.props;
		return (
			<div className='count'>
				<div>{this.state.count}</div>
				<button
					onClick={() =>
						this.setState(state => ({
							count: state.count + 1,
						}))
					}
				>
					+
				</button>
			</div>
		);
	}
}

const spec = {
	mounted: (props, contract) => {
		return 'mounted';
	},
	unmounted: (props, contract) => {
		return 'unmounted';
	},
	collect: (props, contract) => {
		return {
			isStillness: contract.isStillness(),
			stillnessId: contract.getStillnessId(),
		};
	},
};

export const WithCount = connectStillness(spec)(Count);
