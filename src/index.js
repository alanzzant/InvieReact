import React from 'react';
import ReactDOM from 'react-dom';
import cheet from 'cheet.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import './css/index.css';
import './css/animations.css'
import Invie from './Invie';
// import registerServiceWorker from './registerServiceWorker';

import logoTitlePage from './res/invie.png'
import logoPlatzi from './res/platzi.png'
import logoWhite from './res/invie-white.png'
import acustic from './res/invie-acustic.png'
import classic from './res/invie-classic.png'
import easterA from './res/easter-a.png'
import easterB from './res/easter-b.png'

const initialState = {
  isAnimated: '',
  menu: [
    {
      href: 'index.html',
      title: 'Home'
    },
    {
      href: '#guitars',
      title: 'Guitars'
    },
    {
      href: 'prices.html',
      title: 'Prices'
    }
  ],
  logoTitlePage: logoTitlePage,
  logoWhite: logoWhite,
  guitars: [
    {
      image: acustic,
      alt: 'Acustic Invie',
      name: 'Acustic Invie',
      features: [
        'Vintage style', 'Refined wood', 'Aluminuim Invie case'
      ]
    },
    {
      image: classic,
      alt: 'Classic Invie',
      name: 'Classic Invie',
      features: [
        'Easy to start', 'Classic style', 'Lightweight'
      ]
    }
  ]
}

function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props
      return {...state, ...newProps}
    }

    default: {
      return state
    }
  }
}

const store = createStore(reducer, initialState)

const easter = {
  isAnimated: 'is-animated',
  logoTitlePage: logoPlatzi,
  logoWhite: logoPlatzi,
  guitars: [
    {
      image: easterA,
      alt: 'Family Guy Invie',
      name: 'Family Guy Invie',
      features: [
        'A copy of The Simpsons', 'Black humor', 'Lightweight'
      ]
    },
    {
      image: easterB,
      alt: 'Anime Invie',
      name: 'Anime Invie',
      features: [
        'Chinesse drawings', 'Bad humor', 'Pure air'
      ]
    }
  ]
}

cheet('p l a t z i', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  })
})

cheet('g o b a c k', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState
    }
  })
})

ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker();
