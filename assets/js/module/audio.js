




const audio = (status = "init") => {
    console.log("Initialisation du lecteur audio");
    const urlAudio = "./module/audio.js";
    
    switch (status) {
        case "init":
            console.log("initialisation piste audio");
            track = new Audio(urlAudio + catalogue[currentTrack].audio);
            break;
        case "play":
            console.dir(track);
            track.play();
            break;
        case "pause":
            track.pause();
        default :
            console.log("erreur dans la fonction audio()");
            break;

    }


};
export { audio };