import React from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Button } from '@mui/material';

export default function AuthenticatorWithEmail() {
    const services = {
        async handleSignUp(formData) {
            let { username, password, attributes } = formData;
            // custom username
            username = username.toLowerCase();
            attributes.email = attributes.email.toLowerCase();
            return Auth.signUp({
                username,
                password,
                attributes,
                autoSignIn: {
                    enabled: true,
                },
            });
        },
    };
    return (
        <div>
            <h1>Hello</h1>
            <Authenticator services={services} initialState="signUp">
                {({ signOut }) => <Button variant='contained' onClick={signOut}>Sign out</Button>}
            </Authenticator>
        </div>
    );
}