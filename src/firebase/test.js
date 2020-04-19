import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
firestore.collection('users').doc('haiN4pytD89ynytr6yZk').collection('cartItems').doc('m15D2Kq4tYIOGk5yElRQ');
firestore.doc('/users/haiN4pytD89ynytr6yZk/cartItems/m15D2Kq4tYIOGk5yElRQ') // to get the document wihtin a collection
firestore.collection('/users/haiN4pytD89ynytr6yZk/cartItems') //to get the collection

