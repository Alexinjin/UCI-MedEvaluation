import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckboxField, Checkbox } from 'react-native-checkbox-field';
 
class CheckboxForm extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            selected: false,
            fieldLabel: 'Field A'
        };
 
        this.selectCheckbox = this.selectCheckbox.bind(this);
    }
 
    selectCheckbox() {
        this.setState({
            selected: !this.state.selected
        });
    }
 
    render() {
        const defaultColor = '#fff';
 
        // Only onSelect prop is required 
        return (
            <CheckboxField
                label={this.state.fieldLabel}
                onSelect={this.selectCheckbox}
                disabled={this.props.disabled}
                disabledColor='rgb(236,236,236)'
                selected={this.state.selected}
                defaultColor={defaultColor}
                selectedColor="#247fd2"
                containerStyle={styles.containerStyle}
                labelStyle={styles.labelStyle}
                checkboxStyle={styles.checkboxStyle}
                labelSide="left">
                <Text style={{ color: defaultColor }}>Y</Text>
            </CheckboxField>
        )
    }
}
 
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    },
    labelStyle: {
        flex: 1
    },
    checkboxStyle: {
        width: 26,
        height: 26,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 5
    }
});

module.exports = CheckboxForm;