import React from 'react';
import s from './message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

export default Message;