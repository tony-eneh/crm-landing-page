import { useEffect, useState } from 'react';
import './App.css';
import { describeArc } from './helpers/paths';

function App() {
  const width = 500;
  const height = 500;

  const [arc1, setArc1] = useState('');
  const [arc2, setArc2] = useState('');
  const [arc3, setArc3] = useState('');
  const [arc3Top, setArc3Top] = useState('');
  const [arc3TopOutline, setArc3TopOutline] = useState('');

  useEffect(() => {
    const radius = width * 0.25;
    const w = width / 2;
    const h = height / 2;

    setArc1(describeArc(w, h, radius, 0, 40));
    setArc2(describeArc(w, h, radius, 40, 240));
    setArc3(describeArc(w, h, radius, 240, 360));
    setArc3Top(describeArc(w, h, radius, 355, 360));
    setArc3TopOutline(describeArc(w, h - radius, 2.5, 0, 180));
  }, []);

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
      >
        {/* arc 3 */}
        <path
          id="arc3"
          fill="none"
          stroke="#2bba12"
          strokeWidth="20"
          strokeLinecap="round"
          d={arc3}
        />

        {/* arc 2 outline */}
        <path
          id="arc2-outline"
          fill="none"
          stroke="white"
          strokeWidth="25"
          strokeLinecap="round"
          d={arc2}
        />
        {/* arc 2 */}
        <path
          id="arc2"
          fill="none"
          stroke="#e23f0e"
          strokeWidth="20"
          strokeLinecap="round"
          d={arc2}
        />

        {/* arc 1 outline */}
        <path
          id="arc1-outline"
          fill="none"
          stroke="white"
          strokeWidth="25"
          strokeLinecap="round"
          d={arc1}
        />
        {/* arc 1 */}
        <path
          id="arc1"
          fill="none"
          stroke="#446688"
          strokeWidth="20"
          strokeLinecap="round"
          d={arc1}
        />

        {/* arc 3 end  ball outline */}
        <path
          id="arc3-end-ball-outline"
          fill="none"
          stroke="white"
          strokeWidth="20"
          strokeLinecap="round"
          d={arc3TopOutline}
        />
        {/* arc 3 end ball */}
        <path
          id="arc3-end-ball"
          fill="none"
          stroke="#2bba12"
          strokeWidth="20"
          strokeLinecap="round"
          d={arc3Top}
        />
      </svg>
    </>
  );
}

export default App;
