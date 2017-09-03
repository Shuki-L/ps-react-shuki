import React from 'react';
import propTypes from 'prop-types';

class ProgressBar extends React.Component {
    getColor = (percent) => {
        if (this.props.percent === 100) return 'green';
        return this.props.percent > 50 ? 'lightgreen': 'red';
    }

    //can use percentUtils here
    getWidthAsPercentOfTotalWidth = () => {
        return parseInt(this.props.width * (this.props.percent /100), 10);
    }

    render() {
        const {percent, width, height} = this.props;
        return (
            <div style={{border: 'solid 1px ligthgray', width: width}}>
                <div style={{
                    width: this.getWidthAsPercentOfTotalWidth(),
                    height,
                    backgroundColor: this.getColor(percent)
                }} />
            </div>
        );
    }
}

ProgressBar.propTypes = {
    /** Percent of progress completed*/
    percent: propTypes.number.isRequired,

    /** Bar width */
    width: propTypes.number.isRequired,

    /** Bar height */
    height: propTypes.number
};

ProgressBar.defaultProps = {
    height: 5
};

export default ProgressBar;