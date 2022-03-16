require('./../lib/swisscalc.lib.format.js');
require('./../lib/swisscalc.lib.operator.js');
require('./../lib/swisscalc.lib.operatorCache.js');
require('./../lib/swisscalc.lib.shuntingYard.js');
require('./../lib/swisscalc.display.numericDisplay.js');
require('./../lib/swisscalc.display.memoryDisplay.js');
require('./../lib/swisscalc.calc.calculator.js');

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CalcButton, CalcDisplay } from '../components';

export default class CalculatorScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: '0',
        };
        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();
    }

    onDigitPress = (digit) => {
        this.calc.addDigit(digit);
        this.setState({ display: this.calc.getMainDisplay() });
    };

    onBinaryOperatorPress = (operator) => {
        this.calc.addBinaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() });
    };

    onUnaryOperatorPress = (operator) => {
        this.calc.addUnaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() });
    };

    onClearPress = () => {
        this.calc.clear();
        this.setState({ display: this.calc.getMainDisplay() });
    };

    onPlusMinusPress = () => {
        this.calc.negate();
        this.setState({ display: this.calc.getMainDisplay() });
    };

    onEqualPress = () => {
        this.calc.equalsPressed();
        this.setState({ display: this.calc.getMainDisplay() });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.displayContainer}>
                    <CalcDisplay display={this.state.display} />
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={this.onClearPress} title="C" color="#67d1ab" backgroundColor="#eaf8f3"></CalcButton>
                        <CalcButton onPress={this.onPlusMinusPress} title="+/-" color="#67d1ab" backgroundColor="#eaf8f3"></CalcButton>
                        <CalcButton
                            onPress={() => {
                                this.onUnaryOperatorPress(this.oc.PercentOperator);
                            }}
                            title="%"
                            color="#67d1ab"
                            backgroundColor="#eaf8f3"
                        ></CalcButton>
                        <CalcButton
                            onPress={() => {
                                this.onBinaryOperatorPress(this.oc.DivisionOperator);
                            }}
                            title="&divide;"
                            color="#67d1ab"
                            backgroundColor="#eaf8f3"
                        ></CalcButton>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton
                            onPress={() => {
                                this.onDigitPress('7');
                            }}
                            title="7"
                            color="#7a7a7a"
                            backgroundColor="#fafafa"
                        ></CalcButton>
                        <CalcButton
                            onPress={() => {
                                this.onDigitPress('8');
                            }}
                            title="8"
                            color="#7a7a7a"
                            backgroundColor="#fafafa"
                        ></CalcButton>
                        <CalcButton
                            onPress={() => {
                                this.onDigitPress('9');
                            }}
                            title="9"
                            color="#7a7a7a"
                            backgroundColor="#fafafa"
                        ></CalcButton>
                        <CalcButton
                            onPress={() => {
                                this.onBinaryOperatorPress(this.oc.MultiplicationOperator);
                            }}
                            title="X"
                            color="#67d1ab"
                            backgroundColor="#eaf8f3"
                        ></CalcButton>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton
                            onPress={() => {
                                this.onDigitPress('4');
                            }}
                            title="4"
                            color="#7a7a7a"
                            backgroundColor="#fafafa"
                        ></CalcButton>
                        <CalcButton
                            onPress={() => {
                                this.onDigitPress('5');
                            }}
                            title="5"
                            color="#7a7a7a"
                            backgroundColor="#fafafa"
                        ></CalcButton>
                        <CalcButton
                            onPress={() => {
                                this.onDigitPress('6');
                            }}
                            title="6"
                            color="#7a7a7a"
                            backgroundColor="#fafafa"
                        ></CalcButton>
                        <CalcButton
                            onPress={() => {
                                this.onBinaryOperatorPress(this.oc.SubtractOperator);
                            }}
                            title="-"
                            color="#67d1ab"
                            backgroundColor="#eaf8f3"
                        ></CalcButton>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton
                            onPress={() => {
                                this.onDigitPress('1');
                            }}
                            title="1"
                            color="#7a7a7a"
                            backgroundColor="#fafafa"
                        ></CalcButton>
                        <CalcButton
                            onPress={() => {
                                this.onDigitPress('2');
                            }}
                            title="2"
                            color="#7a7a7a"
                            backgroundColor="#fafafa"
                        ></CalcButton>
                        <CalcButton
                            onPress={() => {
                                this.onDigitPress('3');
                            }}
                            title="3"
                            color="#7a7a7a"
                            backgroundColor="#fafafa"
                        ></CalcButton>
                        <CalcButton
                            onPress={() => {
                                this.onBinaryOperatorPress(this.oc.AdditionOperator);
                            }}
                            title="+"
                            color="#67d1ab"
                            backgroundColor="#eaf8f3"
                        ></CalcButton>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton
                            onPress={() => {
                                this.onDigitPress('0');
                            }}
                            title="0"
                            color="#7a7a7a"
                            backgroundColor="#fafafa"
                            style={{ flex: 2 }}
                        ></CalcButton>
                        <CalcButton
                            onPress={() => {
                                this.onDigitPress('.');
                            }}
                            title="."
                            color="#7a7a7a"
                            backgroundColor="#fafafa"
                        ></CalcButton>
                        <CalcButton onPress={this.onEqualPress} title="=" color="#e15a6a" backgroundColor="#f8dade"></CalcButton>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    displayContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    buttonContainer: {
        paddingBottom: 20,
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
