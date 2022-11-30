import React from 'react';
import {Link} from 'react-router-dom';
//import UseState from 'react-hook-use-state';
import { useState, useEffect } from 'react';
import School from "./Audios/School.mp3";
import Student from "./Audios/Student.mp3";
import Bag from "./Audios/Bag.mp3";
import Friend from "./Audios/Friend.mp3";
import Sir from "./Audios/Sir.mp3";
import Tiger from "./Audios/Tiger.mp3";
import Teacher from "./Audios/Teacher.mp3";
import Class from "./Audios/Class.mp3";
import Pencil from "./Audios/Pencil.mp3";
import Mobile from "./Audios/Mobile.mp3";
import UseSound from "use-sound";
import swal from 'sweetalert';

// const audioClips = [
//     {sound: School},
//     {sound: Student},
//     {sound: Bag},
//     {sound: Friend},
//     {sound: Sir},
//     {sound: Tiger},
//     {sound: Teacher},
//     {sound: Class},
//     {sound: Pencil},
//     {sound: Mobile},

// ]



var Randomtitle = [
    ["Bag",Bag],
    ["School",School],
    ["Student",Student],
    ["Class",Class],
    ["Teacher",Teacher],
    ["Friend",Friend],
    ["Tiger",Tiger],
    ["Sir",Sir],
    ["Pencil",Pencil],
    ["Mobile",Mobile]
];

var Showtitle = Randomtitle[Math.floor(Math.random()*Randomtitle.length)];


var Randomresult = [
    ["Excellent","90-95%"],
    ["Great","80-85%"],
    ["Very Good","70-75%"],
    ["Good","60-65%"],
    ["Average","50-55%"],
    ["Not Bad","40-45%"],

];

var Showresult = Randomresult[Math.floor(Math.random()*Randomresult.length)];


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'




function Word() {
   
//     const [recording, setRecording] = React.useState();
//     const [recordings, setRecordings] = React.useState([]);
//     const [message, setMessage] = React.useState("");

//     async function startRecording() {
//   try {
//     const permission = await Audio.requestPermissionsAsync();

//     if (permission.status === "granted") {
//       await Audio.setAudioModeAsync({
//         allowsRecordingIOS: true,
//         playsInSilentModeIOS: true
//       });
      
//       const { recording } = await Audio.Recording.createAsync(
//         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
//       );

//       setRecording(recording);
//     } else {
//       setMessage("Please grant permission to app to access microphone");
//     }
//   } catch (err) {
//     console.error('Failed to start recording', err);
//   }
// }

// async function stopRecording() {
//   setRecording(undefined);
//   await recording.stopAndUnloadAsync();

//   let updatedRecordings = [...recordings];
//   const { sound, status } = await recording.createNewLoadedSoundAsync();
//   updatedRecordings.push({
//     sound: sound,
//     duration: getDurationFormatted(status.durationMillis),
//     file: recording.getURI()
//   });

//   setRecordings(updatedRecordings);
// }
  
// function getRecordingLines() {
//     return recordings.map((recordingLine, index) => {
//       return (
//         <View key={index} style={styles.row}>
//           <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
//           <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
//           <Button style={styles.button} onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></Button>
//         </View>
//       );
//     });
//   }
   
   const [isListening, setIsListening] = useState(false);

   useEffect(() => {
     handleListen()
   }, [isListening]);


  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
   
  }
   
  mic.onstart = () => {
    console.log('Mics on')
  }

   const [play] = UseSound(Showtitle[1]);

   const Result = async(e) => {
     
     e.preventDefault();

     swal({
        title: Showresult[0],
        text: "Your pronouncing accuracy was " + Showresult[1],
        icon: "success",
        button: "OK!",
     });


   }

  
  
    return (
    <>
      
      




      <div className="container-xxl py-5 page-header position-relative mb-5">
            <div className="container py-5">
                <h1 className="display-2 text-white animated slideInDown mb-4">Words</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/words">Learn</Link></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Words</li>
                    </ol>
                </nav>
            </div>
        </div>
      
      
      
      
      
      <div id="container">
            <div id="monitor">
                <div id="monitorscreen">
                     <h1 style={{textAlign: "center", fontWeight: 'bold',
    fontSize: 200,
    marginTop: 80, marginLeft: 150,
    width: 200,}}>{Showtitle[0]}</h1>
                </div>
            </div>
        </div>

      
      


      <div className="container-xxl py-0">
            <div className="container">
                <div className="text-center mx-auto mb-3 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "300px" }}>
                </div>
                <div className="row g-4">
                    <button onClick={play} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="facility-item">
                            <div className="facility-text bg-primary">
                                <span className="bg-primary"></span>
                                <i className="fas fa-volume-up fa-3x text-primary"></i>
                                <span className="bg-primary"></span>
                            </div>
                            <div className="facility-text bg-primary">
                                <h3 className="text-primary mb-3">Listen</h3>
                                {/* <p className="mb-0">Click on this button to listen the given word.</p> */}
                            </div>
                        </div>
                    </button>
                    <button onClick={() => setIsListening(prevState => !prevState)}className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="facility-item">
                            <div className="facility-text bg-success">
                                <span className="bg-success"></span>
                                <i className="fas fa-microphone fa-3x text-success"></i>
                                <span className="bg-success"></span>
                            </div>
                            <div className="facility-text bg-success">
                                <h3 className="text-success mb-3">Speak</h3>
                                {/* <p className="mb-0">Click on this button to record your word.</p> */}
                            </div>
                        </div>
                    </button>
                    <button onClick={Result} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="facility-item">
                            <div className="facility-text bg-warning">
                                <span className="bg-warning"></span>
                                <i className="fa fa-trophy fa-3x text-warning"></i>
                                <span className="bg-warning"></span>
                            </div>
                            <div className="facility-text bg-warning">
                                <h3 className="text-warning mb-3">Result</h3>
                                {/* <p className="mb-0">Click on this button to get the results.</p> */}
                            </div>
                        </div>
                    </button>
                    <button onClick={() => window.location.reload(false)} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="facility-item">
                          <div className="facility-text bg-info"> 
                                <span className="bg-info"></span>
                                <i className="fa fa-random fa-3x text-info"></i>
                                <span className="bg-info"></span>
                            </div>
                                <div className="facility-text bg-info">
                                 <h3 className="text-info mb-3">Refresh</h3>
                                 {/* <p className="mb-0">Click here to see a new word.</p> */}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>

    </>
  )

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     row: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     fill: {
//       flex: 1,
//       margin: 16
//     },
//     button: {
//       margin: 16
//     }
//   });
}

export default Word;
