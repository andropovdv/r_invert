import React from 'react';


const ScrollVendor = (props) => {
    return (
            <option value={props.vendor}>
                {props.vendor}
            </option>
    )
}

export default ScrollVendor