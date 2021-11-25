 /* import React, { Component } from 'react';  
import { StyleSheet, View } from 'react-native';  
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
  
export default class App extends Component {  
  render() {  
    return (  
      <View style={styles.MainContainer}>  
  
        <MapView  
          style={styles.mapStyle}  
          showsUserLocation={false}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{  
            latitude: 14.422232,   
            longitude: 78.226341,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}>  
  
          <Marker  
            coordinate={{ latitude: 14.422232, longitude: 78.226341 }}  
            title={"Current Location"}  
            description={"Your are here right now"}  
          />  
        </MapView>  
          
      </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  MainContainer: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    alignItems: 'center',  
    justifyContent: 'flex-end',  
  },  
  mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
  },  
});   
 */


/* import React, {useState, Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

        const App = () => {
          const [coordinates] = useState([
            {
              latitude: 48.8587741,
              longitude: 2.2069771,
    },
    {
      latitude: 48.8323785,
      longitude: 2.3361663,
    },
  ]);  return (
    <View style={styles.MainContainer}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        <Polyline
          coordinates={coordinates}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6}
        />
      </MapView>
    </View>
  );
};
export default App; 

 */
/* const App = () => {
  const [coordinates] = useState([
    {
      latitude: 48.8587741,
      longitude: 2.2069771,
    },
    {
      latitude: 48.8323785,
      longitude: 2.3361663,
    },
  ]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={"AIzaSyBWFQR-I-jD-pVMINpFKRGbMY-J0cYtlBY"} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
      </MapView>
    </View>
  );
};
export default App; */


/* const App = () => {
  const [coordinates] = useState([
    {
      latitude: 48.8587741,
      longitude: 2.2069771,
    },
    {
      latitude: 48.8323785,
      longitude: 2.3361663,
    },
  ]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: coordinates[0].latitude, 
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        <Polyline
          coordinates={coordinates}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6}
        />
      </MapView>
    </View>
  );
};
export default App


 */
/* const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}); */


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */ import React, {useState, Component} from 'react';
 import {StyleSheet, View} from 'react-native';
 import MapView from 'react-native-maps';
 import {Marker, Polyline} from 'react-native-maps';
 //import MapViewDirections from 'react-native-maps-directions';
 
 const map = () => {
   const [coordinates] = useState([
     {
       latitude: 48.8587741,
       longitude: 2.2069771,
     },
     {
       latitude: 48.8323785,
       longitude: 2.3361663,
     },
   ]);
   return (
     <View style={styles.MainContainer}>
       <MapView
         style={styles.mapStyle}
        
showsUserLocation={true}    zoomEnabled={true}  zoomControlEnabled={true}


         initialRegion={{
           latitude: coordinates[0].latitude,
           longitude: coordinates[0].longitude,
           latitudeDelta: 0.0622,
           longitudeDelta: 0.0121,
         }}>
         <Marker coordinate={coordinates[0]} />
         <Marker coordinate={coordinates[1]} />
         <Polyline
           coordinates={coordinates}
           strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
           strokeColors={['#7F0000']}
           strokeWidth={6}
         />
       </MapView>
     </View>
   );
 };
 export default map ;
 const styles = StyleSheet.create({
   MainContainer: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     alignItems: 'center',
     justifyContent: 'flex-end',
   },
   mapStyle: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
   },
 });