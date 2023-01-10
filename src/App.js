import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import AuthenticatorWithEmail from './EmployeeDetail/AuthenticatorWithEmail'
import MenuButton from './EmployeeDetail/MenuButton';
import Design from './EmployeeDetail/Design';

Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <Design />
      <MenuButton />
      <AuthenticatorWithEmail />
    </div>
  );
}
export default withAuthenticator(App);



