/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import { View, Text, Image, Pressable, Modal, TextInput, StyleSheet } from 'react-native';
import LiveClock from './LiveClock';
import ProfPic from '../assets/me.jpg';
import KeyIcon from '../assets/key.png';
import SwimmingIcon from '../assets/swimming.png';
import BellIcon from '../assets/Bell.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faEraser } from '@fortawesome/free-solid-svg-icons/faEraser';

/**
 * 
 * TODO
 * 
 * editOpacity of colors
 */



const Body = () => {

  const [ editMode, SetEditMode ] = useState(false);
  const [ colors , SetColors ] = useState(['blue', 'red', 'lightgreen']);
  const [ icon, SetIcon ] = useState('');
  const [ semester, SetSemester ] = useState('SP 2023');
  const [ semesterText, SetSemesterText] = useState('');
  const [ color1, SetColor1 ] = useState('');
  const [ color2, SetColor2 ] = useState('');
  const [ color3, SetColor3 ] = useState('');
  const [ iconText, SetIconText] = useState('');

  const semesterRef = useRef();
  const color1Ref = useRef();
  const color2Ref = useRef();
  const color3Ref = useRef();
  const iconRef = useRef();


  const changeColor = (index, val) => {
    // copy array
    // change array
    // change array state

    let x = [...colors];

    x[index] = val.toLowerCase();

    SetColors(x);
  };

  return (
    <View style={{ height: '100%'}}>

        <View style={{ display: 'flex', flexDirection: 'row', height: '27%', width: '100%'}}>

        {/** Modal */}
        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={editMode}
                onRequestClose={() => {
                SetEditMode(!editMode);
                }}
            >
                <View style={{ backgroundColor: 'white', borderColor: 'black', borderWidth: 2 , marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', width: '84%', height: '80%' }}>
                       <View style={{ flex: 1}}>

                       <Text style={{ color: 'black'}}>Edit Mode</Text>
                       <View style={styles.inputView}>
                            <TextInput
                                ref={semesterRef}
                                style={styles.textInput}
                                onChangeText={SetSemesterText}
                                placeholder={semester}
                                placeholderTextColor="black"
                            />
                            <Pressable onPress={() => { SetSemester(semesterText);}}>
                                <FontAwesomeIcon style={styles.faCheck} size={22} icon={faCheck}/>
                            </Pressable>

                            <Pressable onPress={() => { semesterRef.current.clear();}}>
                                <FontAwesomeIcon style={styles.faEraser} size={22} icon={faEraser}/>
                            </Pressable>

                       </View>

                       <Text style={{ color: 'black'}}>Color 1</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                ref={color1Ref}
                                style={styles.textInput}
                                onChangeText={SetColor1}
                                placeholder={colors[0]}
                                placeholderTextColor="black"
                            />

                            <Pressable onPress={() => changeColor(0, color1)}>
                                <FontAwesomeIcon style={styles.faCheck} size={22} icon={faCheck}/>
                            </Pressable>

                            <Pressable onPress={() => { color1Ref.current.clear();}}>
                                <FontAwesomeIcon style={styles.faEraser} size={22} icon={faEraser}/>
                            </Pressable>

                        </View>

                        <Text style={{ color: 'black'}}>Color 2</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                ref={color2Ref}
                                style={styles.textInput}
                                onChangeText={SetColor2}
                                placeholder={colors[1]}
                                placeholderTextColor="black"
                            />
                            <Pressable onPress={() => changeColor(1, color2)}>
                                <FontAwesomeIcon style={styles.faCheck} size={22} icon={faCheck}/>
                            </Pressable>

                            <Pressable onPress={() => { color2Ref.current.clear();}} >
                                <FontAwesomeIcon style={styles.faEraser} size={22} icon={faEraser}/>
                            </Pressable>
                        </View>

                        <Text style={{ color: 'black'}}>Color 3</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                ref={color3Ref}
                                style={styles.textInput}
                                onChangeText={SetColor3}
                                placeholder={colors[2]}
                                placeholderTextColor="black"
                            />
                             <Pressable onPress={() => changeColor(2, color3)}>
                                <FontAwesomeIcon style={styles.faCheck} size={22} icon={faCheck}/>
                            </Pressable>

                            <Pressable onPress={() => { color3Ref.current.clear();}} >
                                <FontAwesomeIcon style={styles.faEraser} size={22} icon={faEraser}/>
                            </Pressable>
                        </View>

                        <Text style={{ color: 'black'}}>Icon</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                ref={iconRef}
                                style={styles.textInput}
                                onChangeText={SetIconText}
                                placeholder={''}
                                placeholderTextColor="black"
                            />
                             <Pressable>
                                <FontAwesomeIcon style={styles.faCheck} size={22} icon={faCheck}/>
                            </Pressable>

                            <Pressable onPress={() => { iconRef.current.clear();}}>
                                <FontAwesomeIcon style={styles.faEraser} size={22} icon={faEraser}/>
                            </Pressable>
                        </View>

                        <Pressable onPress={() => SetEditMode(false)}>
                            <FontAwesomeIcon style={{ color: 'red', marginTop: 20, marginLeft: 10}} size={25} icon={faTimesCircle}/>
                        </Pressable>
                       </View>
                </View>
            </Modal>
        </View>

         {/** Modal */}

            <Image
                source={SwimmingIcon}
                style={{
                    width: 90,
                    height: 90,
                }}
            />
            <Image
                source={ProfPic}
                style={{
                    width: 130,
                    height: 160,
                    marginLeft: '8%',
                    marginTop: '2%',
                }}
            />
            <Image
                source={KeyIcon}
                style={{
                    width: 90,
                    height: 90,
                    marginTop: 70,
                    marginLeft: '5%',
                }}
            />
        </View>

        <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 35}}> {semesterText} {'\n'} Student </Text>

        <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 27}}> {'\n'} JEANBAPTISTE, {'\n'} RICHARD</Text>


        {/** Color Bar */}
        <View style={{ display: 'flex', flexDirection: 'row', borderColor: 'black', borderStartColor: 'black', borderEndColor: 'black', borderWidth: 2, width: '90%', height: 100, marginLeft: 18, marginTop: 40}}>
            <View style={{ borderRightColor: 'black', borderWidth: 1, height: '100%', width: '33%', backgroundColor: colors[0] }}/>
            <View style={{ borderRightColor: 'black', borderWidth: 1, height: '100%', width: '33%', backgroundColor: colors[1] }}/>
            <View style={{ borderRightColor: 'black', borderWidth: 1, height: '100%', width: '34%', backgroundColor: colors[2] }}/>

            <View style={{ position: 'absolute', top: 5, left: '-15%'}}>
                <LiveClock/>
            </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 18}}>

            <Pressable style={{ width: '34%', height: 43, borderRadius: 5, backgroundColor: '#882345'}}>
                <Text style={{ color: 'white', fontSize: 20,fontWeight:'bold', textAlign: 'center', marginTop: 6.5}}>Admin Info</Text>
            </Pressable>

            <FontAwesomeIcon style={{ color: 'black', marginTop: 8, paddingLeft: 45, paddingRight: 45 }} size={25} icon={faPlus}/>

            <Pressable style={{ width: '34%', height: 43, borderRadius: 5, backgroundColor: '#882345'}}>
                <Text style={{ color: 'white', fontSize: 20,fontWeight:'bold', textAlign: 'center', marginTop: 6.5}}>Library ID</Text>
            </Pressable>
        </View>

        <View style={{ display:'flex', flexDirection: 'row', backgroundColor : '#882345', height: 50, position: 'relative', bottom: '-8%'}}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 15, marginTop: 6.5, paddingRight: 50}}>Emergency Call</Text>
            <Image
                source={BellIcon}
                style={{
                    width: 33,
                    height: 33,
                    marginTop: 5.5,
                }}
            />
            <FontAwesomeIcon style={{ color: 'white', marginTop: 8.5, paddingLeft: 100}} size={25} icon={faQuestion}/>

            <Pressable style={{  marginLeft: '-3%' }}onPress={() => SetEditMode(true)}>
                <FontAwesomeIcon style={{ color: 'white', marginTop: 8.5}} size={25} icon={faGear}/>
            </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: 195,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'black',
    },
    inputView: {
        display: 'flex',
        flexDirection: 'row',
    },
    faCheck: {
        color: 'green',
        marginTop: 20,
        marginLeft: 5,
    },
    faEraser: {
        color: 'gray',
        marginTop: 20,
        marginLeft: 20,
    },
});

export default Body;


