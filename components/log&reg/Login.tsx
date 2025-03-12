import React from "react";
import { StackActions } from "@react-navigation/native";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { showMessage, hideMessage } from "react-native-flash-message";

const Login = () => {
    const navigation = useNavigation();

    const handleSignIn = () => {
        showMessage({
            message: "Login Success",
            type: "success",
            duration: 1000,
            onHide: () => navigation.dispatch(StackActions.push("Home")),
        });
    };

    const handleSignUp = () => {
        navigation.dispatch(StackActions.push("Registration"));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="black"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                placeholderTextColor="black"
            />
            <Button title="Sign In" onPress={handleSignIn} />
            <TouchableOpacity onPress={handleSignUp}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        padding: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        textAlign: "center",
    },
});

export default Login;

