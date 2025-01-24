if ("webkitSpeechRecognition" in window) {
    let speechRecognition = new webkitSpeechRecognition();
    let final_transcript = "";

    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = 'en-US';

    speechRecognition.onstart = () => {

        document.querySelector("#status_listening").style.display = "inline-block";
        document.querySelector("#stop_listening").style.display = "inline-block";
    };
    /* speechRecognition.onerror = () => {
       document.querySelector("#status").style.display = "none";
       console.log("Speech Recognition Error");
     };*/

    speechRecognition.onerror = (event) => {
        console.error(`Speech recognition error detected: ${event.error}`);
    }
    speechRecognition.onend = () => {
        document.querySelector("#status_listening").style.display = "none";
        document.querySelector("#stop_listening").style.display = "none";
        console.log("Speech Recognition Ended");
    };

    speechRecognition.onresult = (event) => {
        let interim_transcript = "";
        var final_transcript = "";
        // console.log(final_transcript);

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }

        document.querySelector("#final_result").value = interim_transcript;
        document.querySelector("#final_result").value = final_transcript;

    };

    document.querySelector("#start_listening").onclick = () => {
        speechRecognition.start();
    };
    document.querySelector("#stop_listening").onclick = () => {
        speechRecognition.stop();
        document.querySelector("#stop_listening").style.display = "none";
    };
} else {
    console.log("Speech Recognition Not Available");
}