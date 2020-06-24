function txtToSpeech() {

    let mssg = document.getElementById("txt-to-speech").value;

    let speech = new SpeechSynthesisUtterance();

    speech.lang = "en-US";
    speech.text = mssg;
    speech.volume = 2;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);


}