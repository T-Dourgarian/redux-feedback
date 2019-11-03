import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
import Checkbox from '@material-ui/core/Checkbox';

class Admin extends Component {

    state = {
        checked : this.props.feedback.flagged
    }

    deleteRow = () => {
        console.log(this.props.feedback.id);
        axios({
            url: `/form/${this.props.feedback.id}`,
            method: "DELETE"
        }).then(response => {
            console.log("Delete Successful")
            this.props.refreshFeedback();
        }).catch(error => {
            console.log("ERROR in delete", error);
        })
    }

    handleCheckBox = (event) => {
        console.log(event.target.value);
        this.putRequestFlagged(this.state.checked)
        if (this.state.checked) {
            this.setState({
                checked:false
            })
        } else {
            this.setState({
                checked:true
            })
        }
    }

    putRequestFlagged = bool => {
        axios({
            url:`/form/${this.props.feedback.id}`,
            method:"PUT",
            data:{
                flagged:!bool
            }
        }).then(response => {
            console.log("Flag change successful")
        }).catch(error => {
            console.log("error in put",error)
        })
    }

    render() {
        return (
            <TableRow>
                <TableCell>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={event => this.handleCheckBox(event)}
                        value={this.state.checked}
                        color="primary"
                    />
                    </TableCell>
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
