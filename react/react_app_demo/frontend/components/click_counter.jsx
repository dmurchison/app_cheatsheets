import React from 'react';

// Needed to import Counts because we are using it inside the render method
import Counts from './counts'

// Created react class component
class ClickCounter extends React.Component {
  // Have an instructor if we are going to be setting and manipulating state.
  constructor(props) {
    super(props); // Gives us access to "this" keyword
    this.state = {
      count: 0, 
      previousCounts: []
    }; // Setting the initial state of our react component
    this.clickCount = this.clickCount.bind(this);
    this.reset = this.reset.bind(this);
    // Allows us to reference the methods without using bind each time
  }

  clickCount() {
    // event.preventDefault(); // Need to ask what event really does
    
    this.setState({ count: this.state.count + 1 }); 
    // All this does is set the count to +1 of what it was before the button was clicked
  }

  reset() {
    // event.preventDefault(); // Need to ask what event really does
    
    const previousCounts = this.state.previousCounts;
    // Take the previousCounts array and set it to a const for easy access
    
    previousCounts.push(this.state.count);
    // Push the value into the previousCounts array
    
    this.setState({ count: 0, previousCounts });
    // set the state of count back to 0 and the previousCounts array to the new const previousCounts
  }

  // All react components mush have this
  render() {
    return (
      // Create div el because you must return only 1 element
      <div>
        <button onClick={this.clickCount}>Click Me!</button>
        <span>{this.state.count}</span>
        <br />
        <br />
        <button onClick={this.reset}>Reset!</button>
        <Counts previousCounts={this.state.previousCounts}/>
      </div>
      // We return the actual HTML for the component. REACT IS SO COOL!
    );
  }

}

export default ClickCounter;
