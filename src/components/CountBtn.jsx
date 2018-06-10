import React from 'react';
import { connect } from 'dva';

@connect(({count, loading})=>({count, loading}))
export default class CountBtn extends React.Component{
    render() {
        const {dispatch, type, count} = this.props;
        return <button onClick={() => { dispatch({type, a : 1})}}>{count}~{this.props.children}</button>
    }
}