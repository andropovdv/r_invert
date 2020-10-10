import React from 'react';
import s from './MBoards.module.css';
import MBoardItem from './MboardItem/MboardItem';
import MBoardSoket from './MboardSoket/MboardSoket';
import MBoardSoketSelect from './MboardSoket/MboardSoketSelect';

const MBoards = (props) => {

    // Если параметр один, скобки можно не ставить
    // Если функция только возвращает значение, return и фигурные скобки можно не ставить
    // let mboardsElements = mboardsData
    //     .map((mboard) => <MBoardItem vendor={mboard.vendor} model={mboard.model} id={mboard.id} />);
    let mboardsElements = props.mboards.map((m) => {
        return (
            <MBoardItem vendor={m.vendor} model={m.model} id={m.id} key={m.id}/>
        )
    });
    let soketElements = props.sokets.map((s) => {
        return (
            <MBoardSoket soket={s.soket} id={s.id} key={s.id}/>
        )
    })
    let soketElementsSelect = props.sokets.map((s) => {
        return (
            <MBoardSoketSelect soket={s.soket} id={s.id} key={s.id} />
        )
    })

    let addSoket = () => {
        props.addSoket();
    }

    let onSoketChange = (e) => {
        // let textSoket = e.target.value;
        // props.dispatch(typingMbSoketActionCreator(textSoket))
    }
    let onSelectChange = (e) => {
        let vendor = e.target.value;
        props.changeSoket(vendor)
    }
debugger
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
                    {/* выподающий список */}
                    {/* <select>{soketElements}</select> */}
                </div>
                <div>
                    <hr />
                    <input onChange={onSoketChange} value={props.typingSoket} />
                </div>
                <div>
                    <button onClick={addSoket}>Добавить</button>
                </div>
                {/* test */}
                <div>
                    <select onChange={onSelectChange}>
                        {soketElementsSelect}
                    </select>
                </div>

            </div>
            <hr />

        </div>
    )
}

export default MBoards;