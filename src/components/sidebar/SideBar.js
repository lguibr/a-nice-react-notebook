
import React, { Component } from 'react';
import './SideBar.scss';
import Data from './../../data/Data.js';
class SideBar extends Component {
    render() {
        return (
            <div className="SideBar">
                {Data.files.map(file => {
                    console.log(file)
                    return (
                        <div>
                            <p>{file.name}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default SideBar;