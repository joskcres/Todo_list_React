import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../TodoContext';

function Modal({ children }) {

    return ReactDOM.createPortal(
         children,
        document.querySelector('#modal')
    )
}

export { Modal }