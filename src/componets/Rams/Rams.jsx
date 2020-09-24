import React from 'react';
import RamItem from './RamItem/ramItem';
import s from './Rams.module.css';

const Rams = (props) => {
    
    let RamsElements = props.rams.map((r) => {
        return (
            <RamItem id={r.id} vendor={r.vendor} model={r.model} volume={r.volume} />
        )
    })

    let newVendor = React.createRef();
    let newModel = React.createRef();
    let volume = React.createRef();

    let addRam = () => {
        let textVendor = newVendor.current.value;
        let textModel = newModel.current.value;
        let textVolume = volume.current.value;
        props.addRam(textVendor, textModel, textVolume);
        newVendor.current.value = '';
        newModel.current.value = '';
        volume.current.value = '';
    }

    return (
        <div className={s.rams}>
            <div className={s.ram_items}>
                <h4>Оперативная память:</h4>
                {RamsElements}
            </div>
            <div>
                <div className={s.item}>
                    <label>Производитель</label>
                    <input ref={newVendor} />
                </div>
                <div className={s.item}>
                    <label>Модель</label><br />
                    <input ref={newModel} />
                </div>
                <div className={s.item}>
                    <label>Объем</label><br />
                    <input ref={volume} />
                </div>
                <hr />
                <div>
                    <button onClick={addRam}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default Rams;