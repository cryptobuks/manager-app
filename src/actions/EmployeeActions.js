import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE,
} from './types';


export function employeeUpdate({ prop, value }) {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
}

export function employeeCreate({ name, phone, shift }) {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });

}
