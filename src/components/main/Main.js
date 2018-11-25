
import React, { Component } from 'react';
import './Main.scss';
import Data from './../../data/Data.js' ;
class Main extends Component {
    render() {
        return (
            <div className="Main">
                <p>Eu sou um componente chamado Main<br />{JSON.stringify(Data)}</p>
            </div>
        );
    }
}

export default Main;