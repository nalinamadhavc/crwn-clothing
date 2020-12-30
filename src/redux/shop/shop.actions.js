import { shopActionTypes } from './shop.types';

export const updateCollections = (data) => (
  {
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: data
  }
)