import React from 'react'
import { FileUploader,ThemeProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'


const theme = {
  name: 'my-theme',
  tokens: {
    colors: {},
    borderWidths: {
      small: { value: '2px' },
      medium: { value: '4px' },
      large: { value: '8px' },
    },
    radii: {
      xs: { value: '1rem' },
      small: { value: '2rem' },
      medium: { value: '2rem' },
      large: { value: '2rem' },
      xl: { value: '3rem' },
    },
  },
};
export default function AddFile() {



  return (
    <div>
     <ThemeProvider theme={theme}>
      <FileUploader
        variation="drop"
        acceptedFileTypes={['.jpeg', '.jpg','png']}
        accessLevel="public"
        hasMultipleFiles={true}
        maxSize={200000}
        maxFiles={3}
        isPreviewerVisible={true}
      />
    </ThemeProvider>
    </div>
  )
}
