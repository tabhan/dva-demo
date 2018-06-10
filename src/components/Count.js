import React from 'react';
import ContentBtn from './CountBtn';

export default class Count extends React.Component{
    render() {
        return <div>
            <ContentBtn key="add" type="count/add">+</ContentBtn>
            <ContentBtn key="minus" type="count/minus">-</ContentBtn>
            <ContentBtn key="load" type="count/load">Load</ContentBtn>
        </div>
    }
}