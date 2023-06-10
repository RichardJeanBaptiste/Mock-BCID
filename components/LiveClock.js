/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import { Text, Animated} from 'react-native';


const LiveClock = () => {
    const [dt, setDt] = useState(new Date().toLocaleString());

    useEffect(() => {
        let secTimer = setInterval( () => {

            let x  = new Date().toTimeString();

            x = x.split(':');

            x[2] = x[2].slice(0, 2);

            setDt(x.join(':'));
        },1000);

        return () => clearInterval(secTimer);
    }, []);

    const animated = useRef(new Animated.Value(0)).current;
    const duration = 1500;

    useEffect(() => {

        Animated.loop(
            Animated.sequence([
                Animated.timing(animated, {
                    toValue: 200,
                    duration: duration,
                    useNativeDriver: true,
                }),
                Animated.timing(animated, {
                    toValue: 0,
                    duration: duration,
                    useNativeDriver:true,
                }),
            ])
        ).start();

    },[animated]);

    return (
        <Animated.View style={{ transform: [{ translateX: animated}]}}>
            <Text style={{ color: 'white', fontSize: 60, fontWeight: 'bold'}}>{dt}</Text>
        </Animated.View>
    );
};

export default LiveClock;
