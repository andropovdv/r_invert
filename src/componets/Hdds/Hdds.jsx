import React from 'react';
import s from './Hdds.module.css';
import HddItem from './HddItem/hddItem';

const Hdds = (props) => {
    let hddsElement = props.hdds.map((h) => {
        return (
            <HddItem id={h.id} vendor={h.vendor} model={h.model} />
        )
    });

    let newModel = React.createRef();
    let newVendor = React.createRef();

    let addHdd = () => {
        let textVendor = newVendor.current.value;
        let textModel = newModel.current.value;
        props.addHdd(textVendor, textModel);
        newVendor.current.value = '';
        newModel.current.value = '';
    }

    return (
        <div className={s.hdds}>
            <div className={s.hdd_items}>
                <div><h4>Жесткие диски:</h4></div>
                {hddsElement}
            </div>
            <div>
                <div className={s.item}>
                    <button><b>Добавить</b></button>
                </div>
                <hr />
                <div className={s.item}>
                    <label>Производитель</label>
                    <input ref={newVendor} />
                </div>
                <div className={s.item}>
                    <label>Модель</label><br />
                    <input ref={newModel} />
                </div>
                <div>
                    <button onClick={addHdd}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default Hdds;