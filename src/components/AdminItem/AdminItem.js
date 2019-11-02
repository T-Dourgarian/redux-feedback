import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Admin extends Component {


    render() {
        return (
            <tr>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><button>Delete</button></td>
            </tr>
        );
    }
}



const mapReduxStateToProps = (reduxState => reduxState);

export default withRouter(connect(mapReduxStateToProps)(Admin));
