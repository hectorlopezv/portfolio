import React from "react";// Import the desired words
import Typed from 'typed.js';
class Typing_2 extends React.Component {
  typed: any;
    el: any;
  componentDidMount() {
    const options = {
      strings: [
        'Check my resume'
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

        <a href="https://drive.google.com/file/d/1pZ_LTTMZaC-MzkAyOzavDzqxvpOv6Hn4/view?usp=sharing" target="blank">&nbsp;
          <span className="typed"
            style={{ whiteSpace: "pre" }}
            ref={(el) => {
              this.el = el;
            }}
          />
        </a>

  
    );
  }
}export default Typing_2;