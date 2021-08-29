import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  onSubscribe = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState(prevState => ({text: 'Subscribed'}))
    } else {
      this.setState(prevState => ({text: 'Subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Welcome</h1>
          <p className="paragraph">Thank you! Happy Learning</p>
          <button
            type="button"
            className="btn-style"
            onClick={this.onSubscribe}
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
