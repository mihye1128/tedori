import { Algolia } from './utils/algolia';
import * as functions from 'firebase-functions';

const algolia = new Algolia();

export const createCondition = functions
  .region('asia-northeast1')
  .firestore.document('conditions/{id}')
  .onCreate((snap) => {
    const data = snap.data();
    return algolia.saveRecord({
      indexName: 'conditions',
      largeConcentKey: 'body',
      data,
    });
  });

export const deleteCondition = functions
  .region('asia-northeast1')
  .firestore.document('conditions/{id}')
  .onDelete((snap) => {
    const data = snap.data();

    if (data) {
      return algolia.removeRecord('conditions', data.id);
    } else {
      return;
    }
  });

export const updateCondition = functions
  .region('asia-northeast1')
  .firestore.document('conditions/{id}')
  .onUpdate((change) => {
    const data = change.after.data();
    return algolia.saveRecord({
      indexName: 'conditions',
      largeConcentKey: 'body',
      isUpdate: true,
      data,
    });
  });
