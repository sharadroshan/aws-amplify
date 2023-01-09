import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import AuthenticatorWithEmail from './EmployeeDetail/AuthenticatorWithEmail'


Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <AuthenticatorWithEmail />
    </div>
  );
}
export default withAuthenticator(App);



