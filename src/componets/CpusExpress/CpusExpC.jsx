import React from 'react';
import s from './CpusExp.module.css';
import VendorSelect from '../Record/MyVendor/Vendor/VendorSelect';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import { Field, reduxForm } from 'redux-form';
// import Axios from 'axios';

class CpusExpC extends React.Component {

    componentDidMount() {
        this.props.getCpus('http://localhost:4000/cpus/');
        this.props.getVendors('http://localhost:4000/vendors')
    }

    pushCpus = (values) => {
        let url = 'http://localhost:4000/cpus/';
        let model = values.newModel;
        let vendor = values.newVendor;
        let pushData = {
            model: model,
            vendor: vendor
        }
        this.props.pushCpus(url, pushData);
    }

    addCpu = (values) => {
        alert(values.newVendor + ' ' + values.newModel)
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
                    <AddCpuFormRedux onSubmit={this.pushCpus} {...this.props}/>
                    {/* FORMS */}
                    {/* <div>
?                        <label>Производитель</label>
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
                    </div> */}


                </div>
            </div>
        )
    }


}

const AddCpuForm = (props) => {
    debugger
    return (
        <form onSubmit={props.handleSubmit}> 
            <div>
                <label>Производитель</label>
                <Field name="newVendor" component="select">
                    <option />
                    {props.vendors.map(v => <VendorSelect key={v.id} vendor={v.name} />)}
                </Field>

            </div>
            <div className={s.item}>
                <label>Модель</label><br />
                <Field name="newModel" component="input" />
            </div>
            <div>
                <button>Добавить</button>
            </div>
        </form>
    )
}

const AddCpuFormRedux = reduxForm({form: "addCpuForm"})(AddCpuForm)


export default CpusExpC;