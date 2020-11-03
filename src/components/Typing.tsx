import React from "react";// Import the desired words
import Typed from 'typed.js';
class Typing extends React.Component {
  typed: any;
    el: any;
  componentDidMount() {
    const options = {
      strings: [
        'Electronic Engineer',
        'Full-Stack Software Developer',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }
  
  render() {
    return (

        <p className="d-block "> I'm&nbsp;
          <span className="typed"
            style={{ whiteSpace: "pre" }}
            ref={(el) => {
              this.el = el;
            }}
          />
        </p>

  
    );
  }
}export default Typing;