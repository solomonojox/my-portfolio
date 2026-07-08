// import React from 'react';

// const plots = [
//     { id: 1, status: 'available' },
//     { id: 2, status: 'allocated' },
//     { id: 3, status: 'available' },
//     { id: 4, status: 'allocated' },
//     // Add more plots as needed
// ];

// export default function PlotCanvas() {
//     return (
//         <svg width="600" height="400" style={{ border: '1px solid black' }}>
//             {plots.map(plot => (
//                 <rect
//                     key={plot.id}
//                     x={(plot.id - 1) * 120 + 20}
//                     y="50"
//                     width="100"
//                     height="100"
//                     fill={plot.status === 'available' ? 'lightgreen' : 'lightcoral'}
//                     stroke="black"
//                     strokeWidth="2"
//                 />
//             ))}
//         </svg>
//     );
// }

'use client';

import dynamic from 'next/dynamic';

const PlotCanvas = dynamic(() => import('../../components/plot-canvas'), {
  ssr: false,
});

export default function CanvasClient() {
  return <PlotCanvas />;
}