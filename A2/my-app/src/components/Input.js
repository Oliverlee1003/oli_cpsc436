import React from 'react';
import {connect} from 'react-redux';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            localMsg: ""
        }
    }

    handleChange = (event) => {
        this.setState({localMsg: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMessage(this.state.localMsg);
        this.setState({localMsg:""})
    };

    render() {

        return (<div className = "row">
                <h2> Message List App</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder = "type your new message here" className = "inputText" value={this.state.msg} onChange={this.handleChange}/>
                    <br></br>
                    <input type="submit" className = "AddNewMessageButton"  value="Add New Message"/>
                    <button className = "AddNewMessageButton" onClick={() => this.props.deleteMessage()}>delete All Messages</button>

                </form>

            </div>
        );
    }
}
const mapDispatchToprops = dispatch => {
    return {
        addMessage: (msg) => dispatch({type: 'ADD_MESSAGE', message: msg}),
        deleteMessage: () => dispatch({type: 'DELETE_MESSAGE'}),
    }
}

export default connect(null, mapDispatchToprops)(Form);
