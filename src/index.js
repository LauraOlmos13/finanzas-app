import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css/animate.min.css';
import './index.css'

import { FinanzasApp } from './components/FinanzasApp/FinanzasApp';

document.body.className = "fn-bg-dark fn-text-light"

ReactDOM.render(
    <FinanzasApp />,
    document.getElementById('root')
)