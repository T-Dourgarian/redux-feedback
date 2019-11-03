import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from '@material-ui/core/Slider';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';



class MySlider extends Component {
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


    render() {
        return (
            <>
                <SentimentVeryDissatisfiedIcon id="emoji" />
                <Slider
                    id="formSlider"
                    value={this.props.input}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks={this.marks}
                    min={1}
                    max={5}
                    onChange={(event, value) => this.props.handleChangeFor(event, value)}
                />
                <InsertEmoticonIcon id="emoji" />
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState => reduxState);

export default withRouter(connect(mapReduxStateToProps)(MySlider));
