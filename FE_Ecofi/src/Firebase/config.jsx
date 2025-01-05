// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhtpajk-F1vUkZlmZqnttSJ8xkA7hBkQY",
  authDomain: "ecofi-36e47.firebaseapp.com",
  projectId: "ecofi-36e47",
  storageBucket: "ecofi-36e47.firebasestorage.app",
  messagingSenderId: "950755642136",
  appId: "1:950755642136:web:4d663f6ca87f4986f66c6d",
  measurementId: "G-GVQB1CPQY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

const cargarImagen = async (file) => {
    try {
        // Create a reference for the file
        const fileRef = ref(storage, v4()); // Puedes cambiar 'uploads/' por la carpeta que prefieras
    
        // Upload the file
        await uploadBytes(fileRef, file);
    
        // Get the file's download URL
        const downloadURL = await getDownloadURL(fileRef);
    
        return downloadURL;
        
      } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
      }
}

export default cargarImagen;