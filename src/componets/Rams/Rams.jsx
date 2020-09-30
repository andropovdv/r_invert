import React from 'react';
import RamItem from './RamItem/ramItem';
import s from './Rams.module.css';

const Rams = (props) => {

    let RamsElements = props.rams.map((r) => {
        return (
            <RamItem id={r.id} vendor={r.vendor} model={r.model} volume={r.volume} />
        )
    })

    let addRam = () => {
        props.addRam();
    }

    let onVedorChange = (e) => {
        let textName = e.target.value;
        props.changeVendor(textName)
    }

    let onModelChange = (e) => {
        let textName = e.target.value;
        props.changeModel(textName)
    }

    let onVolumeChange = (e) => {
        let textName = e.target.value;
        props.changeVolume(textName)
    }
    return (
        <div className={s.rams}>
            <div className={s.ram_items}>
                <h4>Оперативная память:</h4>
                {RamsElements}
            </div>
            <div>
                <b>Добавить</b>
                <hr />
                <div className={s.item}>
                    <label>Производитель</label>
                    <input onChange={onVedorChange} value={props.typingVendor} />
                </div>
                <div className={s.item}>
                    <label>Модель</label><br />
                    <input onChange={onModelChange} value={props.typingModel} />
                </div>
                <div className={s.item}>
                    <label>Объем</label><br />
                    <input onChange={onVolumeChange} value={props.typingVolume} />
                </div>

                <div>
                    <button onClick={addRam}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default Rams;