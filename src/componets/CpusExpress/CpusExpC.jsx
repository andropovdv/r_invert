import React from 'react';
import s from './CpusExp.module.css';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import { Field, reduxForm } from 'redux-form';
import ScrollVendorContainer from '../ScrollComponent/ScrollVendor/ScrollVendorContainer';
import { InputArea } from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../Utils/Validarors/validators';

class CpusExpC extends React.Component {

    state = {
        isModalOpen: false
    };

    componentDidMount() {
        this.props.getCpus('http://localhost:4000/cpus/');
        // this.props.getVendors()
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

    openModal = () => {
        debugger
        this.setState({ isModalOpen: true });
    }

    closeModal = () => {
        this.setState({ isModalOpen: false });
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
                </div>
                <div className={s.cpu_add}>
                    <div className={s.item}>
                        <b>Добавить</b>
                    </div>
                    <hr />
                    <AddCpuFormRedux onSubmit={this.pushCpus} {...this.props} />
                    {/* FORMS */}
                    <div>
                        <button onClick={this.openModal}>Модальное</button>
                        <Modal
                            isOpen={this.state.isModalOpen}
                            onClose={this.closeModal}
                        >
                            <AddCpuFormRedux onSubmit={this.pushCpus} {...this.props} />
                            
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

class Modal extends React.Component {
    render() {
        if (this.props.isOpen === false) return null;

        return (
            <div>
                <div className={s.modal}>{this.props.children}</div>
                <div className={s.bg} onClick={(e) => this.close(e)} />
            </div>
        );
    }

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}

const maxLength10 = maxLengthCreator(10);


const AddCpuForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Производитель</label>
                <Field name="newVendor" component={ScrollVendorContainer} />
            </div>
            <div className={s.item}>
                <label>Модель</label><br />
                <Field name="newModel" component={InputArea} placeholder={"Model"}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Добавить</button>
            </div>
        </form>
    )
}

const AddCpuFormRedux = reduxForm({ form: "addCpuForm" })(AddCpuForm)


export default CpusExpC;