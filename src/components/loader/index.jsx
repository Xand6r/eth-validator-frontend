import React, { memo } from "react";
import './loader.scss'
const CircularProgressSpinner = () => {
    return (
        <div className="playlist-circular-loader">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default memo(CircularProgressSpinner);
