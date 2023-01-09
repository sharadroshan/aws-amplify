import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import AuthenticatorWithEmail from './EmployeeDetail/AuthenticatorWithEmail'
import Header from './EmployeeDetail/Header';
import Footer from './EmployeeDetail/Footer';


Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Header />
      <AuthenticatorWithEmail />
      <Footer />
    </div>
  );
}
export default withAuthenticator(App);



