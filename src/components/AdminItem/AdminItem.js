import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";

class Admin extends Component {

    deleteRow = () => {
        console.log(this.props.feedback.id);
        axios({
            url:`/form/${this.props.feedback.id}`,
            method:"DELETE"
        }).then(response => {
            console.log("Delete Successful")
            this.props.refreshFeedback();
        }).catch(error => {
            console.log("ERROR in delete",error);
        })
    }

    render() {
        return (
            <TableRow>
                <TableCell>{this.props.feedback.feeling}</TableCell>
                <TableCell>{this.props.feedback.understanding}</TableCell>
                <TableCell>{this.props.feedback.support}</TableCell>
                <TableCell>{this.props.feedback.comments}</TableCell>
                <TableCell>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        onClick={this.deleteRow}
                    >
                    Delete</Button>
                    </TableCell>
            </TableRow>
        );
    }
}



const mapReduxStateToProps = (reduxState => reduxState);

export default withRouter(connect(mapReduxStateToProps)(Admin));
