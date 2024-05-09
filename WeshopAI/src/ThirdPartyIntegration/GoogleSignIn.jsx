import { GoogleLogin } from 'react-google-login';

const GoogleSignIn = ({ onSuccess, onFailure }) => {
    const clientId = 'YOUR_CLIENT_ID'; // Replace with your own client ID

    return (
        <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleSignIn;
