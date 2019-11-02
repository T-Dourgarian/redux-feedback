import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

class Success extends Component {
    resetForm = () => {
        let reducers = ["SET_FEELING","SET_UNDERSTANDING","SET_SUPPORT","SET_COMMENTS"];

        for (const reducer of reducers) {
            this.props.dispatch({ type: reducer, payload: "" });
        }

        this.props.history.push("/");
    }

    render() {
        return (
            <div className="reviewPage">
                <h1>Thank You!</h1>
                <button onClick={this.resetForm} >Leave New Feedback</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState => reduxState);

export default withRouter(connect(mapReduxStateToProps)(Success));
