// Imports
import React from "react";

// App interface
type Props = {
  className?: string;
};

// App class
export default class App extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className}>
        <div className="flex justify-center text-9xl space-x-8">
          <div id="letter-1" className="">
            <p>1</p>
          </div>
          <div id="letter-2">
            <p>2</p>
          </div>
          <div id="letter-3">
            <p>3</p>
          </div>
          <div id="letter-4">
            <p>4</p>
          </div>
          <div id="letter-5">
            <p>5</p>
          </div>
        </div>
      </div>
    );
  }
}
