import React from 'react';
import RamItem from './RamItem/ramItem';
import s from './Rams.module.css';

const Rams = (props) => {

    let RamsElements = props.state.rams.map((r) => {
        return (
            <RamItem id={r.id} vendor={r.vendor} model={r.model} volume={r.volume} />
        )
    })

    let newVendor = React.createRef();
    let newModel = React.createRef();
    let volume = React.createRef();

    let addRam = () => {
        props.dispatch({type: 'ADD-RAM'});
    }

    let onVedorChange = () => {
        let textName = newVendor.current.value;
        props.dispatch({ type: 'TYPING-RAM-VENDOR', newText: textName })
    }

    let onModelChange = () => {
        let textName = newModel.current.value;
        props.dispatch({ type: 'TYPING-RAM-MODEL', newText: textName })
    }

    let onVolumeChange = () => {
        let textName = volume.current.value;
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
                    <input onChange={onVedorChange} ref={newVendor} value={props.state.typingVendor} />
                </div>
                <div className={s.item}>
                    <label>Модель</label><br />
                    <input onChange={onModelChange} ref={newModel} value={props.state.typingModel} />
                </div>
                <div className={s.item}>
                    <label>Объем</label><br />
                    <input onChange={onVolumeChange} ref={volume} value={props.state.typingVolume} />
                </div>

                <div>
                    <button onClick={addRam}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default Rams;