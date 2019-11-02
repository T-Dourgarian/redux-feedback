import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import AdminItem from "../AdminItem/AdminItem";

class Admin extends Component {

    componentDidMount= () => {
        axios({
            method:"GET",
            url:"/form"
        }).then(response => {
            console.log(response.data)
            this.props.dispatch({type:"SET_ADMIN_DATA",payload:response.data})
        }).catch(error => {
            console.log(error)
        })
    }


    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <td>
                                Feeling
                           </td>
                            <td>
                                Comprehension
                           </td>
                            <td>
                                Support
                           </td>
                            <td>
                                Comments
                           </td>
                            <td>
                                delete
                           </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.adminDataReducer.map(feedback => <AdminItem key={feedback.id} feedback={feedback}/>)}
                    </tbody>
                </table>
            </>
        );
    }
}



const mapReduxStateToProps = (reduxState => reduxState);

export default withRouter(connect(mapReduxStateToProps)(Admin));
