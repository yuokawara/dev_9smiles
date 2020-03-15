import React from 'react';
import { Stylesheet, Text, View } from 'react-native';
import { render } from 'react-dom';

class Square extends React.Component {
    render () {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );

    }
}

const Styles = Stylesheet.create({

})

export default Square;