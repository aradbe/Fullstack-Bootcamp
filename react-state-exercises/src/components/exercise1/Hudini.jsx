import { Component } from "react"

class Hudini extends Component {
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.show ? "Now you see me" : "Now you don't"}
        </div>

        <button onClick={this.toggleShow}>
          Toggle
        </button>
      </div>
    )
  }
}

export default Hudini