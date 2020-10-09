import React from 'react';
import s from './CpusExp.module.css';
import VendorSelect from '../Record/MyVendor/Vendor/VendorSelect';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import Axios from 'axios';



const Cpus = (props) => {

    if (props.cpusDataExp.length === 0) {
        Axios.get("http://localhost:4000/cpus/").then(response => {
            debugger
            props.setCpus(response.data.result)
        })
    }

    const columns = [
        {
            Header: 'Vendor',
            accessor: 'vendor', // String-based value accessors!
            width: 150
        },
        {
            Header: 'Model',
            accessor: 'model',
            width: 300,
        }]

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
                <ReactTable
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                //TODO передача выбора
                                console.log('value', rowInfo.original)
                                if (handleOriginal) {
                                    handleOriginal();
                                }
                            }
                        };
                    }}


                    resizable={false}
                    // minWidth={50}
                    // pageSize={5}
                    showPagination={false}
                    data={props.cpusDataExp}
                    columns={columns}
                    className="-striped -highlight"
                    style={{
                        height: "400px",
                        width: "700px"
                    }} />
                {/* <table border="1">{cpuElements}</table> */}
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