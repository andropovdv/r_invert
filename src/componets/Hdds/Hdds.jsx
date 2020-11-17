import React from 'react';
import s from './Hdds.module.css';
import HddItem from './HddItem/hddItem';
import ScrollVendorContainer from '../ScrollComponent/ScrollVendor/ScrollVendorContainer';

const Hdds = (props) => {
    let hddsElement = props.hdds.map((h) => {
        return (
            <HddItem id={h.id} vendor={h.vendor} model={h.model} />
        )
    });
    
    let addHdd = () => {
        props.addHdd();
    }

    let onVendorChange = (e) => {
        let textName = e.target.value;
        props.changeVendor(textName);
    }

    let onModelChange = (e) => {
        let textName = e.target.value;
        props.changeModel(textName);
    }

    return (
        <div className={s.hdds}>
            <div className={s.hdd_items}>
                <div><h4>Жесткие диски:</h4></div>
                {hddsElement}
            </div>
            <div>
                <div className={s.item}>
                    <b>Добавить</b>
                </div>
                <hr />
                <div className={s.item}>
                    <label>Производитель</label>
                    <input onChange={onVendorChange} value={props.typingVendor} />
                </div>
                <div className={s.item}>
                    <label>Модель</label><br />
                    <input onChange={onModelChange} value={props.typingModel} />
                </div>
                <div>
                    <button onClick={addHdd}>Добавить</button>
                </div>
                <hr/>
                <ScrollVendorContainer />
            </div>
        </div>
    )
}

export default Hdds;