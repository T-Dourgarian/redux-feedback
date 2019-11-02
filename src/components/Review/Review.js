import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

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
                <h1>Review Your Feedback</h1>
                <h3>Feelings: {this.props.formReducer.feeling}</h3>
                <h3>Understanding: {this.props.formReducer.understanding}</h3>
                <h3>Support: {this.props.formReducer.support}</h3>
                <h3>Comments: {this.props.formReducer.comments}</h3>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState => reduxState);

export default withRouter(connect(mapReduxStateToProps)(Form));
