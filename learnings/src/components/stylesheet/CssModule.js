import React from "react";
import Inline from "./Inline";
import moduleApp from './moduleApp.module.css'
function CssModule() {
    return (
        <div>
            <h1 className={moduleApp.success}>Awesome</h1>
            <Inline />
        </div>
    )
}

export default CssModule;