import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CSSTransitionGroup} from 'react-transition-group'

function mapStateToProps(state) {
  return {
    logoWhite: state.logoWhite
  }
}

class Contact extends Component {
  render() {
    return(
      <footer id="footer">
        <div className="container">
          <div className="contact">
            <CSSTransitionGroup
              transitionName="logo-white"
              transitionEnterTimeout={500}
              transitionLeave={false}
            >
              <img key={this.props.logoWhite} src={this.props.logoWhite} alt="logo" />
            </CSSTransitionGroup>
            <a href="tel:+573024456678"><strong>Telefono</strong> <span>3024456678</span></a>
            <a href="mailto:contacto@invie.com"><strong>E-mail</strong> <span>contacto@invie.com</span></a>
          </div>
          <form className="form">
            <div className="col1">
              <label htmlFor="name">Nombre</label>
              <input type="text" required id="name" name="name" />
              <label htmlFor="email">E-mail</label>
              <input type="email" required id="email" name="email" />
              <div className="sex">
                <label htmlFor="female">
                  <input type="radio" id="female" checked name="sex" value="female" /> female
                </label>
                <label htmlFor="male">
                  <input type="radio" id="male" name="sex" value="male" /> male
                </label>
              </div>
            </div>
            <div className="col2">
              <label htmlFor="comment">Comentarios</label>
              <textarea name="comment" id="comment" cols="28" rows="8"></textarea>
              <input type="submit" value="Send comment" className="btn" />
            </div>
          </form>
        </div>
      </footer>
    )
  }
}

export default connect(mapStateToProps)(Contact)
