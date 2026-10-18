// Configuração do Rotina a Dois.
// 1) Configuração do app web no Firebase (projeto controlegastos-dfcca).
//    A apiKey do Firebase web não é secreta: quem protege os dados são as regras do Firestore.
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDf3ljBbayFrHqbUCedIq188vmtgyUYZ7s",
  authDomain: "controlegastos-dfcca.firebaseapp.com",
  projectId: "controlegastos-dfcca",
  storageBucket: "controlegastos-dfcca.firebasestorage.app",
  messagingSenderId: "145667402567",
  appId: "1:145667402567:web:39377eb0f559fb26a33a62",
  measurementId: "G-RX8EEXR3CN"
};

// 2) Os dois e-mails que podem entrar, e quem é cada um.
//    Use os mesmos e-mails nas regras do Firestore (firestore.rules).
export const PESSOAS = {
  "marcelinhoskt13@gmail.com": "marcelo",
  "carlards26@gmail.com": "carla"
};
