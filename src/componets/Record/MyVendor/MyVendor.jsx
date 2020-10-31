import React from 'react';
import s from './MyVendor.module.css';
import Vendor from './Vendor/Vendor';


class MyVendor extends React.Component {

    componentDidMount() {
        this.props.getVendors('http://localhost:4000/vendors');
    }

    pushVendor = () => {
        let url = 'http://localhost:4000/vendors';
        let name = this.props.newName;
        let full_name = this.props.newFullName;
        let pushData = {
            name: name,
            full_name: full_name
        }
        this.props.pushVendors(url, pushData);
        // this.props.getVendors(url);
    }

    onVendorNameChange = (e) => {
        let textName = e.target.value;
        this.props.changeName(textName)
    }

    onVendorFullNameChange = (e) => {
        let textName = e.target.value;
        this.props.changeFullName(textName)
    }


    // vendorElements = this.props.vendors.map(v =><Vendor name={v.name} fullName={v.fullName} />)

    render() {
        debugger
        return (
            <div>
                <div className={s.main}>
                    <div className={s.item}>
                        <label>Наименование:</label>
                        <input disabled={this.props.isEdit} onChange={this.onVendorNameChange} value={this.props.newName} placeholder='Наименование' />
                    </div>
                    <div className={s.item}>
                        <label>Полное наименование: </label>
                        <input disabled={this.props.isEdit} onChange={this.onVendorFullNameChange} value={this.props.newFullName} placeholder='Полное наименование' />
                    </div>
                    <div>
                        <button onClick={this.pushVendor}>Записать</button>
                        <button onClick={this.props.pressOffEditVendor}>Отмена</button>
                    </div>
                    <div>
                        <i>Производители:</i>
                    </div>
                    <div disabled={!this.props.isEdit} className={s.dates}>

                        {/* <div>
                            {this.props.vendors.filter(id => id.id_vendor === this.props.sVendor).map(filteredId => (
                                <>
                                    Выбрано: {this.props.sVendor}, {filteredId.name}
                                </>
                            ))}
                        </div> */}
                        <table className={s.table2}>
                            <tbody>
                                <th>Name</th>
                                <th>Full Name</th>
                                <th></th><th></th>
                            </tbody>
                            {this.props.vendors.map(v =>
                                <Vendor
                                    id_vendor={v.id_vendor}
                                    name={v.name}
                                    fullName={v.full_name}
                                    sVendor={this.props.sVendor}
                                    selectVendor={this.props.selectVendor}
                                    pressOnEditVendor={this.props.pressOnEditVendor} />)}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyVendor;