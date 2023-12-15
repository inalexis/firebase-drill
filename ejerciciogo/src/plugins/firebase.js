
import Vue from "vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "@/firebase/firebaseConfig";

firebase.initializeApp(firebaseConfig);

Vue.prototype.$firebase = firebase;
