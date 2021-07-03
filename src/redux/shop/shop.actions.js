import { shopActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => (
  {
    type: shopActionTypes.FETCH_COLLECTIONS_START,
  }
)

export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsError = errorMessage => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(async snapshot => {
      const collection = convertCollectionsSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(collection))
    }).catch(error => dispatch(fetchCollectionsError(error.message)))
  }
}