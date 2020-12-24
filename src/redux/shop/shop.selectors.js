import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

/* lodash memoize : Return the same function if collectionUrlParam is same. Memoized to avoid creation of new
 * selectionCollection function instance whenever state changes in Collection component which calls mapStateToProps 
*/
export const selectCollection = memoize(collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam])
);


