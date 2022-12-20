import { Offscreen } from 'react-stillness-component';
import Count from './Count';
import { WithCount } from './WithCount';

function KeepAliveDemo() {
	const [show, setShow] = useState(true);

	return (
		<div>
			<button onClick={() => setShow(show => !show)}>Toggle</button>
			<Offscreen visible={show}>
				<Count />
				{/* <WithCount /> */}
			</Offscreen>
		</div>
	);
}

export default KeepAliveDemo;
