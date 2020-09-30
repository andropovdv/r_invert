import React from 'react';
import s from './Cpus.module.css';
import CpuItem from './CpuItem/CpuItem';
import VendorSelect from '../Record/MyVendor/Vendor/VendorSelect';



const Cpus = (props) => {

    let cpuElements = props.cpusData
        .map(c => <CpuItem vendor={c.vendor} model={c.model} id={c.id} />);

    let vendorsElement = props.vendors.map(v => <VendorSelect vendor={v.name} />)

    let addCpu = () => {
        props.addCpu();
    }

    let onVendorChange = (e) => {
        let textName = e.target.value;
        props.changeVendor(textName);
    }

    let onModelChange = (e) => {
        let textName = e.target.value;
        props.changeModel(textName);
    }
    debugger
    return (
        <div className={s.cpus}>
            <div className={s.cpu_items}>
                <div><h4>Процесоры</h4></div>
                
                <table border="1">{cpuElements}</table>
            </div>
            <div className={s.cpu_add}>
                <div className={s.item}>
                    <b>Добавить</b>
                </div>
                <hr />
                <div>
                    {/* TODO посмотреть реализацию react - select */}
                    <label>Производитель</label>
                    <select onChange={onVendorChange}>
                        <option selected={true}>Выберите:</option>
                        {vendorsElement}
                    </select>
                </div>
                <div className={s.item}>
                    <label>Модель</label><br />
                    <input onChange={onModelChange} value={props.typingModel} />
                </div>
                <div>
                    <button onClick={addCpu}>Добавить</button>
                </div>


            </div>
        </div>
    )
}

export default Cpus;