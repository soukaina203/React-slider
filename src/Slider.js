import './Slider.css';

import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props)
    //the array of images that show whenever the user click on the left or right buttons
    this.img = ['red2.jfif','red.jfif',  'red3.jfif'];
    //this.i the index that increments with every click untill it reaches the this.img.length or the 0
    //represents the indexing of this.img
    this.i = 0
    this.state = { attr: this.i }//i place here for the purpose that with every change of the index (click) the page get rendered
  }
  right = () => {
    if (this.i === this.img.length - 1) {//handeling the case if we reach the last img in the this.img array
      this.i = 0
      this.setState({ attr: this.i })
    } else {
      this.setState({ attr: this.i })//we render then increment
      this.i++
    }
  }
  left = () => {
    if (this.i === 0) {//handeling the case if we reach the first img in the this.img array
      this.i = this.img.length - 1
      this.setState({ attr: this.i })
    } else {
      this.setState({ attr: this.i })//we render then decrement
      this.i--
    }
  }
  render() {
    return (
      <div className='app'>
        <div className='inner'>
          <img src={this.img[this.i]} alt="" />
          <i onClick={this.right} class='fas fa-chevron-right'></i> 
          <i onClick={this.left} class='fas fa-chevron-left'></i>
        </div>
      </div>
    );
  }
};
export default Slider;
