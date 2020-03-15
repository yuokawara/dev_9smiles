import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
}

const styles = StyleSheet.create({

})

export default Board;