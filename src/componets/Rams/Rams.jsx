import React from 'react';
import RamItem from './RamItem/ramItem';
import s from './Rams.module.css';
import { typingRamModelActionCreator, typingRamVendorActionCreator } from '../../bll/store';

const Rams = (props) => {

    let RamsElements = props.state.rams.map((r) => {
        return (
            <RamItem id={r.id} vendor={r.vendor} model={r.model} volume={r.volume} />
        )
    })

    let addRam = () => {
        props.dispatch({ type: 'ADD-RAM' });
    }

    let onVedorChange = (e) => {
        let textName = e.target.value;
        props.dispatch(typingRamVendorActionCreator(textName))
    }

    let onModelChange = (e) => {
        let textName = e.target.value;
        props.dispatch(typingRamModelActionCreator(textName))
    }

    let onVolumeChange = (e) => {
        let textName = e.target.value;
        props.dispatch({ type: 'TYPING-RAM-VOLUME', newText: textName })
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
                    <input onChange={onVedorChange} value={props.state.typingVendor} />
                </div>
                <div className={s.item}>
                    <label>Модель</label><br />
                    <input onChange={onModelChange} value={props.state.typingModel} />
                </div>
                <div className={s.item}>
                    <label>Объем</label><br />
                    <input onChange={onVolumeChange} value={props.state.typingVolume} />
                </div>

                <div>
                    <button onClick={addRam}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default Rams;