import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                    <Link to="/admin"><Button id="adminRouteBtn" variant="outlined" color="primary" onClick={this.routeToAdmin}>Admin</Button></Link>
                </header>
                <h1>Thank You!</h1>
                <Button onClick={this.resetForm} type="submit" variant="outlined" color="primary">Leave New Feedback</Button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState => reduxState);

export default withRouter(connect(mapReduxStateToProps)(Success));
