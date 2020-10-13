const ADD_CPU_SUCCESS = 'ADD_CPu_SUCCESS';
const ADD_CPU_FAILURE = 'ADD_CPU_FAILURE';
const ADD_CPU_STARTED = 'ADD_CPU_STARTED';

import { Axios } from 'axios';

export const addCpuTo = ({ vendor, model }) => {
    return (dispatch) => {
        dispatch(addTodoStartedAC());
        console.log('current state: ', getState())
        Axios.post(`http://localhost:4000/cpus/`, {
            vendor,
            model
        })
            .then(res => {
                setTimeout(() => {
                    dispatch(addTodoSuccessAC(res.data.result));
                }, 2500);
            })
            .catch(err => {
                dispatch(addTodoFailureAC(err.message));
            });
    }
}

const addTodoSuccessAC = (todo) => ({
    type: ADD_CPU_SUCCESS,
    payload: {
        ...todo
    }
});

const addTodoStartedAC = () => ({
    type: ADD_CPU_STARTED
});

const addTodoFailureAC = (error) => ({
    type: ADD_CPU_FAILURE,
    payload: {
        error
    }
})