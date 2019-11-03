import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AdminItem from "../AdminItem/AdminItem";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';

class Admin extends Component {

    componentDidMount = () => {
        this.resfreshFeedback();
    }


    resfreshFeedback = () => {
        axios({
            method: "GET",
            url: "/form"
        }).then(response => {
            this.props.dispatch({ type: "SET_ADMIN_DATA", payload: response.data })
        }).catch(error => {
            console.log(error)
        })
    }


    render() {
        return (
            <>
                <header className="App-header">
                    <h1 className="App-title">Cohort Feedback</h1>
                    <Link to="/"><Button id="adminRouteBtn" variant="outlined" color="primary" onClick={this.routeToAdmin}>Home</Button></Link>
                </header>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Flag For Review
                            </TableCell>
                            <TableCell>
                                Feeling
                           </TableCell>
                            <TableCell>
                                Comprehension
                           </TableCell>
                            <TableCell>
                                Support
                           </TableCell>
                            <TableCell>
                                Comments
                           </TableCell>
                            <TableCell>
                                delete
                           </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.adminDataReducer.map(feedback => <AdminItem refreshFeedback={this.resfreshFeedback} key={feedback.id} feedback={feedback} />)}
                    </TableBody>
                </Table>
            </>
        );
    }
}



const mapReduxStateToProps = (reduxState => reduxState);

export default withRouter(connect(mapReduxStateToProps)(Admin));
