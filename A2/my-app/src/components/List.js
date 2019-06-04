import React from 'react';
import {connect} from 'react-redux';
import '../App.css';

class List extends React.Component {
    
    render() {
        return (
            <div>
            <ul>
            {this.props.listOfMessages.map((message, index) => (
                <li key={index}>
                <button className = "messageButton" onClick={() => this.props.showDetail(message)}>{message}</button>
                </li>))}
                </ul>         
                </div>);
            }
        }
        
const mapStateToProps = (state) => {
            return {
                listOfMessages: state.messages
            }; //now it will appear as props
};


const mapDispatchToprops = dispatch => {
    return {
        showDetail: (msg) => dispatch({type: 'SHOW_DETAIL', message:msg})
    }
}
        
        
export default connect(mapStateToProps, mapDispatchToprops)(List);
        