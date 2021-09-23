import React from 'react';
import { BsFillBrightnessHighFill } from 'react-icons/bs';

function Header() {
    return (
        <div className="header">
            <h3 className="header-text">
                <div className="d">D</div>
                <div className="e">e</div>
                <div className="v">v</div>
                <div className="f">f</div>
                <div className="i">i</div>
                <div className="n">n</div>
                <div className="d">d</div>
                <div className="ee">e</div>
                <div className="r">r</div>
            </h3>
            <p className="mode">LIGHT<BsFillBrightnessHighFill /></p>
        </div>
    )
}

export default Header
