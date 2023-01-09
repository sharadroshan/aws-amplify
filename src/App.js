import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import AuthenticatorWithEmail from './EmployeeDetail/AuthenticatorWithEmail'
import appBar from './EmployeeDetail/appBar';

Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <appBar />
      <AuthenticatorWithEmail />
    </div>
  );
}
export default withAuthenticator(App);



