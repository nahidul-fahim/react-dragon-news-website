import { GrGoogle, GrGithub } from 'react-icons/gr';
import app from '../../../Firebase/Firebase.config';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const RighNavLogin = () => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log("Google sign in" ,result.user)
            })
            .catch(error => console.log(error.code))
    };

    const handleGitSignIn = () => {
        signInWithPopup(auth, gitProvider)
        .then (result => {
            console.log("Git signin" ,result.user)
        })
        .catch(error => console.log(error.code))
    }


    return (
        <div className='flex flex-col gap-5'>
            <h2 className="text-xl font-bold">Login With</h2>
            <div className='space-y-4'>
                <button onClick={handleGoogleSignIn} className='flex justify-center items-center gap-x-2 border-2 border-[#315acc] text-[#315acc] px-4 py-2 rounded font-semibold w-full'>
                    <span><GrGoogle /></span>Login with Google
                </button>
                <button onClick={handleGitSignIn} className='flex justify-center items-center gap-x-2 border-2 border-[#1b1b1b] text-[#1b1b1b] px-4 py-2 rounded font-semibold w-full'>
                    <span><GrGithub /></span>Login with Github
                </button>
            </div>
        </div>
    );
};

export default RighNavLogin;