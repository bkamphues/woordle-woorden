// Imports
import React from "react";

// App interface
type Props = {
  className?: string;
  version: string;
};

// App class
export default class App extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className}>
        <h1 className="text-5xl font-mono text-center text-neutral-300 p-5">
          Woordle-Woorden Prototype {this.props.version}
        </h1>
        <div className="flex justify-center max-w-lg text-center text-4xl sm:text-6xl md:text-9xl space-x-8 mx-10">
          <p id="letter-1" className="flex-auto">
            1
          </p>
          <p id="letter-1" className="flex-auto">
            2
          </p>
          <p id="letter-1" className="flex-auto">
            3
          </p>
          <p id="letter-1" className="flex-auto">
            4
          </p>
          <p id="letter-1" className="flex-auto">
            5
          </p>
        </div>
      </div>
    );
  }
}
