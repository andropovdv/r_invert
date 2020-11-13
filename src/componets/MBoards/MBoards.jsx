import React from 'react';
import s from './MBoards.module.css';
import MBoardItem from './MboardItem/MboardItem';
import MBoardSoket from './MboardSoket/MboardSoket';
import MBoardSoketSelect from './MboardSoket/MboardSoketSelect';
import { Field, reduxForm } from 'redux-form';
// import { Redirect } from 'react-router-dom';

const MBoards = (props) => {

    // Если параметр один, скобки можно не ставить
    // Если функция только возвращает значение, return и фигурные скобки можно не ставить
    // let mboardsElements = mboardsData
    //     .map((mboard) => <MBoardItem vendor={mboard.vendor} model={mboard.model} id={mboard.id} />);
    let mboardsElements = props.mboards.map((m) => {
        return (
            <MBoardItem vendor={m.vendor} model={m.model} id={m.id} key={m.id} />
        )
    });
    let soketElements = props.sokets.map((s) => {
        return (
            <MBoardSoket soket={s.soket} id={s.id} key={s.id} />
        )
    })
    // let soketElementsSelect = props.sokets.map((s) => {
    //     return (
    //         <MBoardSoketSelect soket={s.soket} id={s.id} key={s.id} />
    //     )
    // })

    let addNewSoket = (values) => {
        props.addSoket(values.newSoket);
    }

    return (
        <div className={s.mboards}>
            <div className={s.mboard_items}>
                <div><h4>Материнские платы</h4></div>
                {mboardsElements}
            </div>
            <div className={s.mb_adds}>
                <div className={s.item}> 
                    <h4>Разъемы:</h4>
                </div>
                <div>
                    {soketElements}
                </div>
                {/* FORM */}
                <AddSoketFormRedux onSubmit={addNewSoket} {...props}/>
            </div>
            <hr />

        </div>
    )
}

const AddSoketForm = (props) => {

    let soketElementsSelect = props.sokets.map((s) => {
        return (
            <MBoardSoketSelect soket={s.soket} id={s.id} key={s.id} />
        )
    })

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <hr />
                    <Field component="input" name="typingSoket" />
                    {/* <input onChange={onSoketChange} value={props.typingSoket} /> */}
                </div>
                <div>
                    <button>Добавить</button>
                </div>
                <div>
                    <Field name="newSoket" component="select">
                        <option />
                        {soketElementsSelect}
                        {/* TODO а нафига. если можно мапом сделать здесь */}
                    </Field>
                </div>
            </div>
        </form>
    )
}

const AddSoketFormRedux = reduxForm({ form: "addSoketForm" })(AddSoketForm)

export default MBoards;