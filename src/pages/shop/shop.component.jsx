import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionContainer from '../collection/collection.container';
import CollectionOverviewWithContainer from '../../components/collections-overview/collections-overview.container';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();

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
    /* collectionRef.get().then(async snapshot => {
      const collection = convertCollectionsSnapshopToMap(snapshot)
      updateCollections((collection));
      this.setState({ loading: false })
    }) */

    /**
     * Fetch using firestore API
     */
    /* fetch('https://firestore.googleapis.com/v1/projects/crown-db-proj/databases/(default)/documents/')
    .then(response => response.json())
    .then(collections => console.log(collections)); */

  }

  render() {
    const { match } = this .props;

    return (
      <div className = 'shop-page'>
        <Route
          exact path ={`${match.path}`}
          component={CollectionOverviewWithContainer} 
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer} 
          />
      </div>  
    )
  }
} 

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);