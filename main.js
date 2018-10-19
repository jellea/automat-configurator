var output = undefined
var input = undefined
var currentConfig = undefined

function connect (){
  WebMidi.enable(function (err) {
    var conne = document.getElementById("connected")

    if (!err) {
      output = WebMidi.getOutputByName("dadamachines automat");
      input = WebMidi.getInputByName("dadamachines automat");
                 
      if (output && input) {
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
  }, true);
}

connect()

function changeProgram(num){
  output.sendProgramChange(num);
}

function playNote(dur, velo){
    output.playNote(1, 1, {duration: dur, rawVelocity:true, velocity: velo})
}

function sysexListener(e) {
    console.log(e);
    if (e.data[1] == 0x64 && e.data[2] == 0x41 &&
        e.data[3] == 0x64 && e.data[4] == 0x41) {
        showSysexConfig(e.data.slice(5, -1));
        var b1 = document.getElementById("save1")
        var b2 = document.getElementById("save2")
        b1.disabled = false
        b2.disabled = false

    }
}

function readSysex(){
    if (!input.hasListener('sysex', "all", sysexListener)) {
        input.addListener('sysex', "all", sysexListener);
    }

    output.sendSysex(0x64,[0x41,0x64,0x41,0x67,0x65,0x74,0x63]);
}

function showSysexConfig(configData){
    currentConfig = configData;
    var pField = document.getElementById("sysex_config");
    var displayData = "";
    var nvData = undefined;
    var veloData = undefined;
    
    if(configData[0] == 0x70 && configData[1] == 0x69 &&
        configData[2] == 0x6E && configData[3] == 0x73) {
        nvData = configData.slice(4, 28);
    }

    if(configData[0] == 0x70 && configData[1] == 0x69 &&
       configData[2] == 0x6E && configData[3] == 0x73) {
        nvData = configData.slice(4, 28);
    }

    if(configData[36] == 0x76 && configData[37] == 0x65 &&
       configData[38] == 0x6C && configData[39] == 0x6F) {
        veloData = configData.slice(40, 52);
    }
    
    if (nvData && veloData) {
        var j;
        for(var i = 0; i < 12; i++) {
            j = i * 2;
            displayData += "pin: " + (i + 1);
            displayData += "    channel: " + nvData[j];
            displayData += "    note: " + nvData[j + 1];
            displayData += "    program: " + veloData[i];
            displayData += "\r\n";
        }
    }
    
    pField.innerText = displayData;
}

function writeSysex(configData){
    if (configData) {
        var preArray = new Uint8Array([0x41,0x64,0x41]);
        var arrayOut = new Uint8Array(preArray.length + configData.length);
        arrayOut.set(preArray);
        arrayOut.set(configData, preArray.length);
        
        output.sendSysex(0x64, Array.from(arrayOut));
    }
}

function writeSysexConfigToFile(configData){
    var saveDataToFile = (function (blob, fileName) {
                var a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";
                      return function (arrayOut, fileName) {
                var blob =  new Blob([arrayOut], {type: "application/octet-stream"});
                var url = window.URL.createObjectURL(blob);

                a.href = url;
                a.download = fileName;
                a.click();
                window.URL.revokeObjectURL(url);
                };
                }());

    if (configData) {
        var preArray = new Uint8Array([0xF0,0x64,0x41,0x64,0x41]);
        var postArray = new Uint8Array([0xF7]);
        var arrayOut = new Uint8Array(preArray.length + configData.length + 1);
        arrayOut.set(preArray);
        arrayOut.set(configData, preArray.length);
        arrayOut.set(postArray, preArray.length + configData.length);

        saveDataToFile(arrayOut, "automat.syx");
    }
}


