import React from 'react';
import s from './FormsControl.module.css'

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}

        </div>
    )
}

export const InputArea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const TextArea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

// Пример, без сокращения кода
// const FormControl = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={s.formControl + " " + (hasError ? s.error : "")}>
//             <div>
//                 <input {...input} {...props} alt={meta.error} />
//             </div>
//             {hasError && <span>{meta.error}</span>}

//         </div>
//     )
// }