import React from 'react';
import s from './Hdds.module.css';
import HddItem from './HddItem/hddItem';
import { addHddActionCreator, typingHddModelActionCreator } from '../../bll/state';
import { typingHddVendorActionCreator } from './../../bll/state';

const Hdds = (props) => {
    let hddsElement = props.state.hdds.map((h) => {
        return (
            <HddItem id={h.id} vendor={h.vendor} model={h.model} />
        )
    });

    let newModel = React.createRef();
    let newVendor = React.createRef();

    let addHdd = () => {
        props.dispatch(addHddActionCreator())
    }

    let onVendorChange = () => {
        let textName = newVendor.current.value;
        props.dispatch(typingHddVendorActionCreator(textName));
    }

    let onModelChange = () => {
        let textName = newModel.current.value;
        props.dispatch(typingHddModelActionCreator(textName));
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
                    <input onChange={onVendorChange} ref={newVendor} value={props.state.typingVendor} />
                </div>
                <div className={s.item}>
                    <label>Модель</label><br />
                    <input onChange={onModelChange} ref={newModel} value={props.state.typingModel} />
                </div>
                <div>
                    <button onClick={addHdd}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default Hdds;