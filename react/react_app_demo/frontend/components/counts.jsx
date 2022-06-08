import React from 'react'

// class Counts extends React.Component {

//   render() {
//     return (
//       <ul>
//         {
//           this.props.previousCounts.map((el, idx) => <li key={idx}>{el}</li>)
//         }
//       </ul>
//     );
//   }

// }

// FUNCTIONAL COMPONENT (THIS SHOULD BE USED WHEN POSSIBLE)
const Counts = ({ previousCounts }) => (
  <ul>
    {
      previousCounts.map((count, idx) => <li key={idx}>{count}</li>)
    }
  </ul>
);

export default Counts;
