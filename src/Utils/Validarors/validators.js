export const required = value => {
    if (value) return undefined;
    return 'Поле обязательно в заполнению';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Максимальная длинна сообщения ${maxLength} символов`;
    return undefined;
}