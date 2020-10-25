import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { deleteCollectionByReference } from './utils/firebase.function';

const db = admin.firestore();

export const deleteAfUser = functions
  .region('asia-northeast1')
  .https.onCall((data, context) => {
    console.log(data);
    return admin.auth().deleteUser(data);
  });

export const deleteUserAccount = functions
  .region('asia-northeast1')
  .auth.user()
  .onDelete(async (user, _) => {
    const conditions = db
      .collection(`conditions`)
      .where('userId', '==', user.uid);
    await deleteCollectionByReference(conditions);
    return;
  });
