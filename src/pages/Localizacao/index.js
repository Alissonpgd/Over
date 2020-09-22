import React from 'react';
import { View, Text, ImageBackground, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from './styles';


export default function Localizacao (){
    return(
        <View style={styles.container}>
            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    latitude: -7.2305600,
                    longitude: -35.8811100,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
            >
                <Marker 
                    coordinate={{
                        latitude: -7.23072,
                        longitude: -35.8817 
                    }}
                    image={require('../../assets/market.png')}
                    title='Local'
                    description='Ponto de Partida'                
                />

            </MapView>
        </View>
    );
}