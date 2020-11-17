import React from 'react';


const ScrollVendor = (props) => {
    debugger
    return (
            <option key={props.index} value={props.vendor}>
                {props.vendor}
            </option>
    )
}

export default ScrollVendor