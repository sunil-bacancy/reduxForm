import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import allFields from './allFields';

const initialvalues = {
    FName: 'dfjvgf',
    PhNo: '5454515',
};

const Validation = values => {
    const errors = {};

    var ph = values.PhNo;

    var fname = values.FName;

    var namevalid = /[A-Z][a-zA-Z]{1,10}$/;
    if (ph === undefined) {
        ph = '';
    }

    if (fname === undefined) {
        fname = '';
    }

    if (fname == '') {
        errors.FName = '* Required';
    }
    if (ph == '') {
        errors.PhNo = '* Required';
    }
    if (!namevalid.test(fname)) {
        errors.FName = "Must be valid";
    }
    if (isNaN(ph)) {
        errors.PhNo = 'Must be a number ';
    }
    if (ph.length > 8 && ph.length < 13) {
        errors.PhNo = 'Maximun allow 10 numbers';
    }

    return errors;
}

class MyForm extends Component {
    constructor(props) {
        super(props);
        // this.refs.PhNoRef.bind();
    }

    myAction = values => {
        console.log('values', values);
        alert('This is pure demo purpose : ');
    };

    render() {
        // console.log('SimpleForm Props :', this.props);
        const { handleSubmit, pristine, submitting } = this.props;
        // let buttonAction = false;
        return (
            <View style={styles.container}>
                {/* <Text>SimpleForm</Text> */}
                <Field
                    name="FName"
                    ref="FNameRef"
                    refField={ref => (this['FName'] = ref)}
                    placeholder="First Name"
                    nextField={'PhNo'}
                    onSubmitEdit={(event) => { this['PhNo'].focus() }}
                    component={allFields}
                />
                <Field
                    name="PhNo"
                    ref="PhNo"
                    refField={ref => (this['PhNo'] = ref)}
                    placeholder="Phone No."
                    component={allFields}

                />
                <TouchableOpacity
                    style={(pristine) ? styles.btnligth : styles.btnStyle}
                    onPress={handleSubmit(this.myAction)}
                    disabled={pristine || submitting}
                // onPress={handler("Hello")}}
                >
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
                        Ok
            </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const withForm = reduxForm({
    form: 'Simple',
    // enableReinitialize: true,
    validate: Validation,
    // initialValues: initialvalues,

});

const mapStateToProps = state => {
    return {
        state,
    };
};

export default connect(mapStateToProps, null)(withForm(MyForm));

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        // backgroundColor: 'blue',
    },
    btnStyle: {
        marginTop: 80,
        minWidth: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2AC062',
        display: 'flex',
        borderRadius: 5,
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowRadius: 20,
        shadowOffset: { height: 10, width: 5 },
    },
    btnligth: {
        marginTop: 80,
        minWidth: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        display: 'flex',
        borderRadius: 5,
        shadowColor: 'grey',
        shadowOpacity: 0.4,
        shadowRadius: 20,
        shadowOffset: { height: 10, width: 5 },
    },
});