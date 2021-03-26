import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import {SearchBar} from 'react-native-elements';
import firebase from 'firebase';
import db from './config';

export default class Login extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            emailID: '',
            password: ''
        }
    }

    login = async(EmailId, Password) =>
    {
        if(EmailId && Password)
        {
            try 
            {
                const response = await firebase.auth().signInWithEmailAndPassword(EmailId, Password);
                if(response)
                {
                    this.props.navigation.navigate('WriteStory');
                }
            }

            catch(error)
            {
                switch(error.code)
                {
                    case "auth/user-not-found" : alert("User does not exist");
                    break;

                    case "auth/invalid-email" : alert("Incorrect email or password");
                    break;

                    default : alert("Error!");
                }
            }
        }

        else
        {
            alert("Enter your email and password");
        }
    }


    
    render()
    {
        return(
            <View>
                <KeyboardAvoidingView>
                    <View>    
                        <TextInput
                            placeholder = "abc@gmail.com"
                            keyboardType = 'email-address'
                            value = {this.state.emailID}
                            onChangeText = {(text)=>{
                                this.setState({emailID: text})
                            }}
                        />

                        <TextInput
                            placeholder = "Password"
                            secureTextEntry = {true}
                            value = {this.state.password}
                            onChangeText = {(text)=>{
                                this.setState({password: text})
                            }}
                        />
                    </View>

                    <View>
                        <TouchableOpacity onPress = {()=>{this.login(this.state.emailID, this.state.password)}}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}