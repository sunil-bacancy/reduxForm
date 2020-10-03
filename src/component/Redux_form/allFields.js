import React from 'react';
import { View, TextInput, Text } from 'react-native';


const allFields = props => {
    const {
        placeholder,
        refField,
        meta: { error, touched },
        input: { onChange, value },
        buttonAction
    } = props;
    // console.log('next=====', nextField);

    return (
        <View>
            <TextInput
                ref={refField}
                style={{
                    marginTop: 10,
                    height: 50,
                    width: 200,
                    borderBottomColor: 'black',
                    borderBottomWidth: 2,
                    borderBottomEndRadius: 5,
                }}
                // blurOnSubmit={false}
                returnKeyType={'next'}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                onSubmitEditing={() => {
                    // alert('next')
                    if (props.onSubmitEdit) props.onSubmitEdit()
                    // if (nextField) {
                    //     this[nextField].focus()
                    // }

                }
                }
            />
            {touched && error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>
    )
}

export default allFields;