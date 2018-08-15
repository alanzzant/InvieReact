import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CSSTransitionGroup} from 'react-transition-group'

import Like from './Like'

function mapStateToProps(state) {
  return {
    logo: state.logoTitlePage,
    menu: state.menu,
    isAnimated: state.isAnimated
  } 
}


class TitlePage extends Component {
  renderLikes() {
    const likes = new Array(100).fill({})

    return(
      likes.map((element, index) => {
        const style = {
          left: Math.floor(Math.random() * window.innerWidth - 55) + 'px',
          animationDelay: Math.floor(Math.random() * 10000) + 'ms'
        }
        console.log(style.bottom);

        return(
          <Like key={index} style={style} />
        )
      })
    )
  }

  render() {
    return (
      <section id="title" className={this.props.isAnimated}>
        <header id="home" className="container">
          <figure className="logo">
            <img src={this.props.logo} alt="Invie" />
          </figure>
          <i className="fas fa-bars btn-nav" id="btn-open"></i>
          <nav className="nav" id="nav">
            <ul>
              {this.props.menu.map((item, index) => {
                return(
                  <li key={index}><a href={item.href}>{item.title}</a></li>
                )
              })}
            </ul>
          </nav>
        </header>
        
        <CSSTransitionGroup
          transitionName="animationInOut"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
        >
          {
            !this.props.isAnimated &&
            <div className="container" key="portada">
              <h1><span className="line-through">Invie</span>sieble guitars</h1>
              <p>
                Be the rock star that you always dreamed.
              </p>
              <a className="btn" href="#guitars">Read more</a>
            </div>
          }
        </CSSTransitionGroup>
        {this.props.isAnimated && this.renderLikes()}
      </section>
    )
  }
}

export default connect(mapStateToProps)(TitlePage)
