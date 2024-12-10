import React from "react";

        class Car extends React.Component {
            constructor() {
              super();
              this.state = {
                na:"mycar",
                color: "red"};
            };
            render() {
              return <h2>I am a {this.state.color} Super! {this.state.na}</h2>;
            }
          }
          

export default Car;