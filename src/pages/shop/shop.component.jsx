import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshopToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const FIRSTORE_URL = 'https://firestore.googleapis.com/v1/projects/crown-db-proj/databases/(default)/documents/';

class ShopPage extends React.Component {
  state = {
      loading: true
    }
  
  unsubscribeFromSnapshot = null;


  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection('collections');

    /**
     *  observable pattern
     * next: (value) => {'do something'},
     * error: (error) => {'do something if error},
     * complete: () => {'do something once stream of events is finished'}
     * */ 
    /* collectionRef.onSnapshot(async snapshot => {
      const collection = convertCollectionsSnapshopToMap(snapshot)
      updateCollections((collection));
      this.setState({ loading: false })
    }) */

    /**
     * Promiis pattern
     */
    collectionRef.get().then(async snapshot => {
      const collection = convertCollectionsSnapshopToMap(snapshot)
      updateCollections((collection));
      this.setState({ loading: false })
    })

    /**
     * Fetch using firestore API
     */
    /* fetch(FIRSTORE_URL)
    .then(response => response.json())
    .then(collections => console.log(collections)); */

  }

  render() {
    const { match } = this .props;
    const { loading } = this.state;
    return (
      <div className = 'shop-page'>
        <Route exact path ={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={ loading } {...props} /> } />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={ loading } { ...props } /> } />
      </div>  
    )
  }
} 

const mapDispatchToProps = dispatch => ({
  updateCollections: (collection) => dispatch(updateCollections(collection))
})

export default connect(null, mapDispatchToProps)(ShopPage);