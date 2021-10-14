import React from 'react';
import ReactDOM from 'react-dom';
import Questionaire from '../Questionaire';

it('renders without crashing', ()=>{
    const div=document.createElement("div");
    ReactDOM.render(<Questionaire></Questionaire>,div)
})