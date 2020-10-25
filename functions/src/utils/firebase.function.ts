import * as admin from 'firebase-admin';
const db = admin.firestore();

export function deleteCollectionByPath(
  collectionPath: string,
  batchSize: number = 499
) {
  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.limit(batchSize);

  return new Promise((resolve, reject) =>
    deleteQueryBatch(query, batchSize, resolve, reject)
  );
}

export function deleteCollectionByReference(
  ref:
    | FirebaseFirestore.Query<FirebaseFirestore.DocumentData>
    | FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>,
  batchSize: number = 499
): Promise<void> {
  const query = ref.limit(batchSize);
  return new Promise((resolve, reject) =>
    deleteQueryBatch(query, batchSize, resolve, reject)
  );
}

function deleteQueryBatch(
  query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData>,
  batchSize: number,
  resolve: any,
  reject: any
) {
  query
    .get()
    .then((snapshot) => {
      if (snapshot.size === 0) {
        return 0;
      }

      const batch = db.batch();
      snapshot.docs.forEach((doc) => batch.delete(doc.ref));
      return batch.commit().then(() => snapshot.size);
    })
    .then((numDeleted) => {
      if (numDeleted === 0) {
        resolve();
        return;
      }
      process.nextTick(() =>
        deleteQueryBatch(query, batchSize, resolve, reject)
      );
    })
    .catch(reject);
}
