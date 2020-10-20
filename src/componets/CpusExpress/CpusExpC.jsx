import React from 'react';
import s from './CpusExp.module.css';
import VendorSelect from '../Record/MyVendor/Vendor/VendorSelect';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
// import Axios from 'axios';

class CpusExpC extends React.Component {

    componentDidMount() {
        debugger
        this.props.getCpus('http://localhost:4000/cpus/');
        this.props.getVendors('http://localhost:4000/vendors')
    }

    pushCpus = () => {
        let url = 'http://localhost:4000/cpus/';
        let model = this.props.typingModelExp;
        let vendor = this.props.typingVendorExp;
        let pushData = {
            model: model,
            vendor: vendor
        }
        this.props.pushCpus(url, pushData);
    }

    onVendorChangeExp = (e) => {
        let textName = e.target.value;
        this.props.changeVendorExp(textName);
    }

    onModelChangeExp = (e) => {
        let textName = e.target.value;
        this.props.changeModelExp(textName);
    }

    // vendorsElement = this.props.vendors.map(v => <VendorSelect key={v.id} vendor={v.name} />)

    render() {
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
                        data={this.props.cpusDataExp}
                        columns={[
                            {
                                Header: 'Vendor',
                                accessor: 'vendor', // String-based value accessors!
                                width: 150
                            },
                            {
                                Header: 'Model',
                                accessor: 'model',
                                width: 300,
                            }]}
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
                        <select onChange={this.onVendorChangeExp}>
                            <option selected={true}>Выберите:</option>
                            {this.props.vendors.map(v => <VendorSelect key={v.id} vendor={v.name} />)}
                        </select>
                    </div>
                    <div className={s.item}>
                        <label>Модель</label><br />
                        <input onChange={this.onModelChangeExp} value={this.props.typingModelExp} />
                    </div>
                    <div>
                        <button onClick={this.pushCpus}>Добавить</button>
                    </div>


                </div>
            </div>
        )
    }


}


export default CpusExpC;