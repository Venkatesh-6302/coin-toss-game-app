// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {totalCount: 0, headsCount: 0, tailsCount: 0, tossResult: 0}

  onClickBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)

    if (tossResult === 0) {
      this.setState(prevStat => ({
        headsCount: prevStat.headsCount + 1,
        tossResult: 0,
      }))
    } else {
      this.setState(prevStat => ({
        tailsCount: prevStat.tailsCount + 1,
        tossResult: 1,
      }))
    }
    this.setState(prevStat => ({totalCount: prevStat.totalCount + 1}))
  }

  render() {
    const {totalCount, headsCount, tailsCount, tossResult} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails)</p>
          {tossResult === 0 ? (
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button type="button" className="btn" onClick={this.onClickBtn}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total:{totalCount}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
