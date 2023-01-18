import './App.css';
import { Amplify,Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
// import AuthenticatorWithEmail from './EmployeeDetail/AuthenticatorWithEmail';
import { routes } from './routes';
import { theme } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useRoutes } from 'react-router-dom';

Amplify.configure(awsconfig);

function App() {
  const content = useRoutes(routes);

  return (
    <div>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        {content}
        {/* <AuthenticatorWithEmail /> */}
      </ThemeProvider>
    </div>
  );
}
export default withAuthenticator(App);