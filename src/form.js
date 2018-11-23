import React from 'react';

export default function Form (props) {
    return (
        <input
            className = 'input-control'
            id = 'cityname'
            placeholder = 'Stockholm'
            type="text"
            value = {props.value}
            onChange = {props.onChange}
        />
    )
}
