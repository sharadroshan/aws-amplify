import React from 'react'
import { View, Text, useTheme } from '@aws-amplify/ui-react';

export default function Footer() {
    const { tokens } = useTheme();
    return (
        <div>
            <View textAlign="center" padding={tokens.space.large}>
                <Text color={tokens.colors.neutral[80]}>
                    &copy; All Rights Reserved
                </Text>
            </View>
        </div>
    )
}
