import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

class Form extends Component {
    handleSubmit = () => {
        axios({
            method:"POST",
            url:"/form",
            data: {
                ...this.props.formReducer,
                date:this.getTime()
            }
        }).then(response => {
            console.log("post success")
        }).catch(error => {
            console.log(error);
        })
        swal("Success!", "Your feedback was submitted!", "success");
        this.props.history.push("/success");
    }

    clearForm = () => {
        
    }

    getTime = () => {
        let today = new Date();
        return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    }

    render() {
        return (
            <div className="reviewPage">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                    <Link to="/admin"><Button id="adminRouteBtn" variant="outlined" color="primary" onClick={this.routeToAdmin}>Admin</Button></Link>
                </header>
                <h1>Review Your Feedback</h1>
                <h3>Feelings: {this.props.formReducer.feeling}</h3>
                <h3>Understanding: {this.props.formReducer.understanding}</h3>
                <h3>Support: {this.props.formReducer.support}</h3>
                <h3>Comments: {this.props.formReducer.comments}</h3>
                <Button onClick={this.handleSubmit} type="submit" variant="outlined" color="primary">Submit</Button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState => reduxState);

export default withRouter(connect(mapReduxStateToProps)(Form));
