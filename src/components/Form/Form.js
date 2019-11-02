import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Form extends Component {
    state = {
        input: "1"

    }

    componentDidMount = () => {
        if (this.props.reducer === "SET_COMMENTS") {
            this.setState({
                input: ""
            })
        }
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

    routeToPrev = () => {
        this.props.history.push(this.props.prev);
    }


    render() {
        return (
            <>
                <h1>{this.props.question}</h1>
                {this.props.prev && <Button onClick={this.routeToPrev} variant="contained" color="primary">Prev</Button> }
                
                <form onSubmit={this.submit}>
                    {this.props.reducer === "SET_COMMENTS" ?
                        <TextField
                            id="outlined-multiline-static"
                            label="Comments"
                            multiline
                            rows="5"
                            margin="normal"
                            variant="outlined"
                            value={this.state.input}
                            onChange={event => this.handleChangeFor(event)}
                        /> :

                        <FormControl>
                        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            value={this.state.input}
                            onChange={event => this.handleChangeFor(event)}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>}
                    <Button id="submitBtn" type="submit" variant="contained" color="primary">Next</Button>
                </form>
            </>
        );
    }
}



const mapReduxStateToProps = (reduxState => reduxState);

export default withRouter(connect(mapReduxStateToProps)(Form));
