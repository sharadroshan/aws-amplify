import React from 'react'
import { Menu, MenuItem, View } from '@aws-amplify/ui-react';

export default function MenuButton() {
    return (
        <View width="4rem">
            <Menu>
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
            </Menu>
        </View>
    )
}
