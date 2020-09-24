import React from 'react';
import s from './Cpus.module.css';
import CpuItem from './CpuItem/CpuItem';



const Cpus = (props) => {

    let cpuElements = props.cpusData.map(c => <CpuItem vendor={c.vendor} model={c.model} id={c.id} />

    );

    let newVendor = React.createRef();
    let newModel = React.createRef();

    let addCpu = () => {
        let textVendor = newVendor.current.value;
        let textModel = newModel.current.value;
        props.addCpu(textVendor, textModel);
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
                    <input ref={newVendor} />
                </div>
                <div className={s.item}>
                    <label>Модель</label><br />
                    <input ref={newModel} />
                </div>
                <div>
                    <button onClick={addCpu}>Добавить</button>
                </div>

            </div>
        </div>
    )
}

export default Cpus;