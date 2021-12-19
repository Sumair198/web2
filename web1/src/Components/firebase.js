
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
function Firebase(){
const firebaseConfig = {
  apiKey: "AIzaSyBAIllqsmFB3V26esFBLdR8ZZUi5dhRiOI",
  authDomain: "hackathon-web-2.firebaseapp.com",
  projectId: "hackathon-web-2",
  storageBucket: "hackathon-web-2.appspot.com",
  messagingSenderId: "413486854228",
  appId: "1:413486854228:web:39755e70389b800d40bdc1",
  measurementId: "G-RXXRD8NJLX"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
}
export default Firebase