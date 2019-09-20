import firebase from 'react-native-firebase';

export function readGuide() {
  return firebase.firestore().collection('guides').get().then((querySnapshot) => {
    let guides: any = {};
    let ids: string[] = [];

    querySnapshot.forEach((doc) => {
      guides = {
        ...guides,
        [doc.id]: {id: doc.id, ...doc.data()},
      };
      ids = [...ids, doc.id];
    });

    return { data: guides, ids: ids };
  });
}