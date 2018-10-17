var output = undefined

function connect (){
  WebMidi.enable(function (err) {
    var conne = document.getElementById("connected")

    if (!err) {
      output = WebMidi.getOutputByName("dadamachines automat");

      if (output) {
        conne.innerText = "automat connected"
        conne.style.color = "green"
      } else {
        conne.innerText = "could not find automat"
        conne.style.color = "red"
      }
    } else {
      conne.innerText = "please accept webmidi (in Google Chrome)"
      conne.style.color = "red"
    }
  });
}

connect()

function changeProgram(num){
  output.sendProgramChange(num);
}

function playNote(dur, velo){
    output.playNote(1, 1, {duration: dur, rawVelocity:true, velocity: velo})
}