import React from "react";
import "./App.css";
import axios from "axios";

class RenderPage extends React.Component {
  state = {
    lectures: [],
    isOpen: false
  };

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2019/master/homeworks/react-basics/data.json"
      )
      .then(response => {
        this.setState({ lectures: response.data.lectures });
      })
      .catch(error => console.log(error));
  }

  isOpen = () => {
    this.setState(this.setState(prevState => ({ isOpen: !prevState.isOpen })));
  };

  render() {
    return (
      <div>
        {this.state.isOpen ? (
          <button
            onClick={this.isOpen}
            style={{ background: "Red", color: "white" }}
          >
            Show!
          </button>
        ) : (
          <>
            <button
              onClick={this.isOpen}
              style={{ background: "blue", color: "white" }}
            >
              Hide!
            </button>
            <div className="wrapper">
              {this.state.lectures.map((lectures, index) => {
                return (
                  <ul className="list" key={index}>
                    <li>{lectures.date}</li>
                    <li>{lectures.lecturer}</li>
                    <li>{lectures.title}</li>
                    <li>{lectures.link}</li>
                  </ul>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default RenderPage;
