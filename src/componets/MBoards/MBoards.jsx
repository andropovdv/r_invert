import React from 'react';
import s from './MBoards.module.css';
import MBoardItem from './MboardItem/MboardItem';
import MBoardSoket from './MboardSoket/MboardSoket';

const MBoards = (props) => {

    // Если параметр один, скобки можно не ставить
    // Если функция только возвращает значение, return и фигурные скобки можно не ставить
    // let mboardsElements = mboardsData
    //     .map((mboard) => <MBoardItem vendor={mboard.vendor} model={mboard.model} id={mboard.id} />);
    let mboardsElements = props.state.mboards.map((m) => {
        return (
            <MBoardItem vendor={m.vendor} model={m.model} id={m.id} />
        )
    });

    let soketElements = props.state.sokets.map((s) => {
        return (
            <MBoardSoket soket={s.soket} />
        )
    })

    let newSoket = React.createRef();
    let addSoket = () => {
        let textSoket = newSoket.current.value;
        props.addSoket(textSoket);
        newSoket.current.value = '';
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
                <div>
                    <hr />
                    <input ref={newSoket} />
                </div>
                <div>
                    <button onClick={addSoket}>Добавить</button>
                </div>
            </div>
            <hr />

        </div>
    )
}

export default MBoards;