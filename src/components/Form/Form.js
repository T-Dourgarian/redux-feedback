import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Form extends Component {
    state = {
        input: "1"
    }

    handleChangeFor = (event) => {
        console.log(event.target.value);
        this.setState({
            input: event.target.value
        })
    }

    submit = () => {
        this.props.dispatch({ type: this.props.reducer, payload: this.state.input });
        this.props.history.push(this.props.next);
    }


    render() {
        return (
            <>  
                <h1>{this.props.question}</h1>
                <form onSubmit={this.submit}>
                    {this.props.reducer === "SET_COMMENTS" ?
                        <input value={this.state.input} onChange={event => this.handleChangeFor(event)} /> :
                        <select onChange={event => this.handleChangeFor(event)}>
                            <option value="1" >1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>}
                    <button type="submit">Next</button>
                </form>
            </>
        );
    }
}



const mapReduxStateToProps = (reduxState => reduxState);

export default withRouter(connect(mapReduxStateToProps)(Form));
