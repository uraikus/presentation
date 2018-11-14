import './components/viewer/live.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Viewer from './components/viewer/viewer.js'

let renderer = document.createElement('div')
document.body.appendChild(renderer)
ReactDOM.render(<Viewer />, renderer)
