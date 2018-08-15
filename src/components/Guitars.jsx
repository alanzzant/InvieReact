import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CSSTransitionGroup} from 'react-transition-group'

function mapStateToProps(state) {
  return {
    guitars: state.guitars
  }
}

class Guitars extends Component {
  render() {
    return(
      <section id="guitars" className="container">
        <h2>Our guitars</h2>

        {
          this.props.guitars.map((guitar, index) => {
            return(
              <article className="guitar" key={index}>
                <CSSTransitionGroup
                  transitionName="flicker"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                >
                  <img className="guitar-img" key={guitar.image} src={guitar.image} alt={guitar.alt} width="350" />
                </CSSTransitionGroup>

                <CSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={500}
                  transitionLeave={false}
                >
                  <div className="guitar-container" key={guitar.name}>
                    <h3>{guitar.name}</h3>
                    <ol>
                      {guitar.features.map((feature, index) => {
                        return(
                          <li key={index}>{feature}</li>
                        )
                      })}
                    </ol>
                  </div>
                </CSSTransitionGroup>
              </article>
            )
          })
        }

      </section>
    )
  }
}

export default connect(mapStateToProps)(Guitars)
