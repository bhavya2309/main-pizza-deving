import { firebaseapp } from "../firebase/firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export const OAuth = async ()=>{
    // Login with Gmail
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({   
        prompt : "select_account "
    });
    const auth = getAuth();
    const userCred = await signInWithPopup(auth, provider);
    return userCred;
// Initialize Firebase Auth provider

  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});
}