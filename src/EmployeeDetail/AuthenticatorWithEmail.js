import * as React from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Avatar, Box } from '@mui/material';

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
        <div >
            <Box>
                <Authenticator services={services} initialState="signUp">
                    {({ signOut }) => <Avatar onClick={signOut} alt='User' sx={{cursor:'pointer'}} src='/static/images/avatar/2.jpg' ></Avatar>}
                </Authenticator>
            </Box>
        </div>
    );
}




