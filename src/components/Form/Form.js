import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MySlider from "../MySlider/MySlider";

// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


class Form extends Component {
    state = {
        input: 3

    }

    marks = [
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
    ];

    componentDidMount = () => {
        if (this.props.reducer === "SET_COMMENTS") {
            this.setState({
                input: ""
            })
        }
    }

    handleChangeFor = (event, value) => {
        this.setState({
            input: value
        })
    }


    handleChangeForTextArea = (event) => {
        this.setState({
            input:event.target.value
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
                            onChange={(event,value) => this.handleChangeForTextArea(event,value)}
                        /> : 
                        <MySlider handleChangeFor={this.handleChangeFor} input={this.state.input}/>
                    }



                    <br />
                    {this.props.prev && <Button id="prevBtn" onClick={this.routeToPrev} variant="contained" color="primary"><NavigateBeforeIcon />Prev</Button>}
                    <Button id="nextBtn" type="submit" variant="contained" color="primary">Next<NavigateNextIcon /></Button>
                </form>
            </>
        );
    }
}

//     <FormControl>
//     <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
//     <Select
//         labelId="demo-controlled-open-select-label"
//         id="demo-controlled-open-select"
//         value={this.state.input}
//         onChange={event => this.handleChangeFor(event)}
//     >
//         <MenuItem value={1}>1</MenuItem>
//         <MenuItem value={2}>2</MenuItem>
//         <MenuItem value={3}>3</MenuItem>
//         <MenuItem value={4}>4</MenuItem>
//         <MenuItem value={5}>5</MenuItem>
//     </Select>
// </FormControl>



const mapReduxStateToProps = (reduxState => reduxState);

export default withRouter(connect(mapReduxStateToProps)(Form));
