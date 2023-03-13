import { Offscreen, useStillness } from 'react-stillness-component';

function Count() {
  const [count, setCount] = useState(0);
  const collected = useStillness({
    mounted: contract => {
      return 'mounted';
    },
    unmounted: contract => {
      return 'unmounted';
    },
    collect: contract => {
      return {
        isStillness: contract.isStillness(),
        stillnessId: contract.getStillnessId(),
        unset: contract.unset, // function
        clear: contract.clear, // function
      };
    },
  });

  useEffect(() => {
    // console.log(collected);
  }, [collected]);

  return (
    <div className='count'>
      <p>{collected.isStillness}</p>
      <p>class count: {count}</p>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Count;
