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
                size='large'
                backgroundColor={{ base: 'green' }}
            >
                <Authenticator services={services} initialState="signUp">
                    {({ signOut }) =>
                        <MenuItem onClick={signOut}>
                            Log Out
                        </MenuItem>}
                </Authenticator>
            </Menu>
            <Image alt="Amplify logo"
                src="https://thumbs.dreamstime.com/b/laptop-header-image-good-morning-top-view-retro-breakfast-hero-old-wooden-desk-70599728.jpg    "
                height="400px"
                width="100%"
            >
            </Image>
        </div>
    );
}