import React from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator, MenuItem, Menu, Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

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
            <Menu
                menuAlign="end"
                backgroundColor='skyblue'
                size='large'
            >
                <Authenticator services={services} initialState="signUp">
                    {({ signOut }) =>
                        <MenuItem onClick={signOut}>
                            Log Out
                        </MenuItem>}
                </Authenticator>
            </Menu>
            <Image alt="Amplify logo"
                src="https://cdn-images.zety.com/pages/resume_headings.jpg"
                height="200px"
                width="100%"
            >
            </Image>
        </div>
    );
}