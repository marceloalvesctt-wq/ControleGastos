// Configuração do Rotina a Dois.
// 1) Cole aqui o "firebaseConfig" do seu app web no Firebase
//    (Console do Firebase > Configurações do projeto > Seus apps > SDK setup and configuration > Config).
export const FIREBASE_CONFIG = {
  apiKey: "COLE_AQUI",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  projectId: "SEU-PROJETO",
  storageBucket: "SEU-PROJETO.appspot.com",
  messagingSenderId: "000000000000",
  appId: "COLE_AQUI"
};

// 2) Os dois e-mails que podem entrar, e quem é cada um.
//    Use os mesmos e-mails nas regras do Firestore (firestore.rules).
export const PESSOAS = {
  "marcelinhoskt13@gmail.com": "marcelo",
  "carlards26@gmail.com": "carla"
};
