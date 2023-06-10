/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// BC - Purple - #882345

const Main = () => {
  return (
    <View style={{
        backgroundColor: '#882345',
        width: '100%',
        height: 65,
        justifyContent: 'center',
    }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesomeIcon style={{ color: 'white', marginLeft: 17}} size={18} icon={faArrowLeft}/>
            <Text style={{ color: 'white', fontSize: 17, marginLeft: 30, fontWeight: 'bold'}} >My BC ID</Text>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', marginLeft: 110}}>LOGOUT</Text>
            <FontAwesomeIcon style={{ color: 'white', marginLeft: 20}} size={18} icon={faEllipsisVertical}/>
        </View>
    </View>
  );
};

export default Main;
