
import React, { Component } from 'react';
import './Main.scss';
import Data from './../../data/Data.js' ;
class Main extends Component {
    //selectPage = ()=>{
    //    let focusPage = null
    //    let openedPages = []
    //}    
    render() {
        let i = 0
        return (
            <div className="Main">
                {
                    Data.files.map(file => {
                    i++
                    console.log(file)
                    return (
                        <div>
                            <p>{i}  {file.theContent}</p>
                        </div>
                        )
                })}                
            </div>
        );
    }
}

export default Main;