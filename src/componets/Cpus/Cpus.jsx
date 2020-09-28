import React from 'react';
import s from './Cpus.module.css';
import CpuItem from './CpuItem/CpuItem';
import { addCpuActionCreator, typingCpuModelActionCreator, typingCpuVendorActionCreator } from './../../bll/state';



const Cpus = (props) => {

    let cpuElements = props.state.cpusData.map(c => <CpuItem vendor={c.vendor} model={c.model} id={c.id} />);

    let addCpu = () => {
        props.dispatch(addCpuActionCreator());
    }

    let onVendorChange = (e) => {
        let textName = e.target.value;
        props.dispatch(typingCpuVendorActionCreator(textName));
    }

    let onModelChange = (e) => {
        let textName = e.target.value;
        props.dispatch(typingCpuModelActionCreator(textName))
    }

    return (
        <div className={s.cpus}>
            <div className={s.cpu_items}>
                <div><h4>Процесоры</h4></div>
                {cpuElements}
            </div>
            <div className={s.cpu_add}>
                <div className={s.item}>
                    <b>Добавить</b>
                </div>
                <hr />
                <div className={s.item}>
                    <label>Производитель</label>
                    <input onChange={onVendorChange} value={props.state.typingVendor} />
                </div>
                <div className={s.item}>
                    <label>Модель</label><br />
                    <input onChange={onModelChange} value={props.state.typingModel} />
                </div>
                <div>
                    <button onClick={addCpu}>Добавить</button>
                </div>

            </div>
        </div>
    )
}

export default Cpus;