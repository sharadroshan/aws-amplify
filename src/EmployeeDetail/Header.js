import React from 'react'
import { View, Image, useTheme } from '@aws-amplify/ui-react';


export default function Header() {
    const { tokens } = useTheme();
    return (
        <div>
            <View textAlign="center" padding={tokens.space.large}>
                <Image
                    alt="Amplify logo"
                    src="https://docs.amplify.aws/assets/logo-dark.svg"
                />
            </View>
        </div>
    )
}
