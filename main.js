var output = undefined
var input = undefined
var currentConfig = undefined


document.addEventListener('DOMContentLoaded', function(){
        
           for (var i = 1; i <= 12; ++i) {
                  var list1 = document.getElementById('m' + i);
                  
                  list1.options[0] = new Option('OMNI', '0');
                  list1.options[1] = new Option('1', '1');
                  list1.options[2] = new Option('2', '2');
                  list1.options[3] = new Option('3', '3');
                  list1.options[4] = new Option('4', '4');
                  list1.options[5] = new Option('5', '5');
                  list1.options[6] = new Option('6', '6');
                  list1.options[7] = new Option('7', '7');
                  list1.options[8] = new Option('8', '8');
                  list1.options[9] = new Option('9', '9');
                  list1.options[10] = new Option('10', '10');
                  list1.options[11] = new Option('11', '11');
                  list1.options[12] = new Option('12', '12');
                  list1.options[13] = new Option('13', '13');
                  list1.options[14] = new Option('14', '14');
                  list1.options[15] = new Option('15', '15');
                  list1.options[16] = new Option('16', '16');

                  var list2 = document.getElementById('v' + i);
                  list2.options[0] = new Option('ON OFF', '0');
                  list2.options[1] = new Option('Quad Velocity', '1');
                  list2.options[2] = new Option('Inverse Quad Velocity', '2');
                  list2.options[3] = new Option('PWM Velocity', '3');
                  list2.options[4] = new Option('Continous PWM', '4');
                  list2.options[5] = new Option('Hum with controls', '5');

                  var list3 = document.getElementById('n' + i);
                  list3.options[0] = new Option('Not Set', '0');
                  list3.options[1] = new Option('A0', '21');
                  list3.options[2] = new Option('A#0', '22');
                  list3.options[3] = new Option('B0', '23');
                  list3.options[4] = new Option('C1', '24');
                  list3.options[5] = new Option('C#1', '25');
                  list3.options[6] = new Option('D1', '26');
                  list3.options[7] = new Option('D#1', '27');
                  list3.options[8] = new Option('E1', '28');
                  list3.options[9] = new Option('F1', '29');
                  list3.options[10] = new Option('F#1', '30');
                  list3.options[11] = new Option('G1', '31');
                  list3.options[12] = new Option('G#1', '32');
                  list3.options[13] = new Option('A1', '33');
                  list3.options[14] = new Option('A#1', '34');
                  list3.options[15] = new Option('B1', '35');
                  list3.options[16] = new Option('C2', '36');
                  list3.options[17] = new Option('C#2', '37');
                  list3.options[18] = new Option('D2', '38');
                  list3.options[19] = new Option('D#2', '39');
                  list3.options[20] = new Option('E2', '40');
                  list3.options[21] = new Option('F2', '41');
                  list3.options[22] = new Option('F#2', '42');
                  list3.options[23] = new Option('G2', '43');
                  list3.options[24] = new Option('G#2', '44');
                  list3.options[25] = new Option('A2', '45');
                  list3.options[26] = new Option('A#2', '46');
                  list3.options[27] = new Option('B2', '47');
                  list3.options[28] = new Option('C3', '48');
                  list3.options[29] = new Option('C#3', '49');
                  list3.options[30] = new Option('D3', '50');
                  list3.options[31] = new Option('D#3', '51');
                  list3.options[32] = new Option('E3', '52');
                  list3.options[33] = new Option('F3', '53');
                  list3.options[34] = new Option('F#3', '54');
                  list3.options[35] = new Option('G3', '55');
                  list3.options[36] = new Option('G#3', '56');
                  list3.options[37] = new Option('A3', '57');
                  list3.options[38] = new Option('A#3', '58');
                  list3.options[39] = new Option('B3', '59');
                  list3.options[40] = new Option('C4', '60');
                  list3.options[41] = new Option('C#4', '61');
                  list3.options[42] = new Option('D4', '62');
                  list3.options[43] = new Option('D#4', '63');
                  list3.options[44] = new Option('E4', '64');
                  list3.options[45] = new Option('F4', '65');
                  list3.options[46] = new Option('F#4', '66');
                  list3.options[47] = new Option('G4', '67');
                  list3.options[48] = new Option('G#4', '68');
                  list3.options[49] = new Option('A4',  '69');
                  list3.options[50] = new Option('A#4', '70');
                  list3.options[51] = new Option('B4',  '71');
                  list3.options[52] = new Option('C5',  '72');
                  list3.options[53] = new Option('C#5', '73');
                  list3.options[54] = new Option('D5',  '74');
                  list3.options[55] = new Option('D#5', '75');
                  list3.options[56] = new Option('E5',  '76');
                  list3.options[57] = new Option('F5',  '77');
                  list3.options[58] = new Option('F#5', '78');
                  list3.options[59] = new Option('G5',  '79');
                  list3.options[60] = new Option('G#5', '80');
                  list3.options[61] = new Option('A5',  '81');
                  list3.options[62] = new Option('A#5', '82');
                  list3.options[63] = new Option('B5',  '83');
                  list3.options[64] = new Option('C6',  '84');
                  list3.options[65] = new Option('C#6', '85');
                  list3.options[66] = new Option('D6',  '86');
                  list3.options[67] = new Option('D#6', '87');
                  list3.options[68] = new Option('E6',  '88');
                  list3.options[69] = new Option('F6',  '89');
                  list3.options[70] = new Option('F#6', '90');
                  list3.options[71] = new Option('G6',  '91');
                  list3.options[72] = new Option('G#6', '92');
                  list3.options[73] = new Option('A6',  '93');
                  list3.options[74] = new Option('A#6', '94');
                  list3.options[75] = new Option('B6',  '95');
                  list3.options[76] = new Option('C7',  '96');
                  list3.options[77] = new Option('C#7', '97');
                  list3.options[78] = new Option('D7',  '98');
                  list3.options[79] = new Option('D#7', '99');
                  list3.options[80] = new Option('E7',  '100');
                  list3.options[81] = new Option('F7',  '101');
                  list3.options[82] = new Option('F#7', '102');
                  list3.options[83] = new Option('G7',  '103');
                  list3.options[84] = new Option('G#7', '104');
                  list3.options[85] = new Option('A7',  '105');
                  list3.options[86] = new Option('A#7', '106');
                  list3.options[87] = new Option('B7',  '107');
                  list3.options[88] = new Option('C8',  '108');
            }
                          });


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
    if (e.data[1] == 0 && e.data[2] == 0x64 && e.data[3] == 0x41 &&
        e.data[4] == 0x64 && e.data[5] == 0x41) {
        showSysexConfig(e.data.slice(6, -1));
        var b1 = document.getElementById("save1")
        b1.disabled = false
    }
}

function readSysex(){
    if (!input.hasListener('sysex', "all", sysexListener)) {
        input.addListener('sysex', "all", sysexListener);
    }

    output.sendSysex([0, 0x64, 0x41] ,[0x64,0x41,0x67,0x65,0x74,0x63]);
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
            
            var list1 = document.getElementById('m' + (i + 1));
            var list2 = document.getElementById('v' + (i + 1));
            var note1 = document.getElementById('n' + (i + 1));
            
            list1.value = nvData[j];
            note1.value = nvData[j + 1];
            list2.value = veloData[i];
        }
    }
    
    pField.innerText = displayData;
}

function getConfigDataFromForm() {
    var configData = new Uint8Array(54);
    
    var header1 = new Uint8Array([0x70,0x69,0x6E,0x73]);
    var filler = new Uint8Array([0,0,0,0,0,0,0,0]);
    var header2 = new Uint8Array([0x76,0x65,0x6C,0x6F]);

    configData.set(header1);
    configData.set(filler, 28);
    configData.set(header2, 36);
    
    var j;
    for(var i = 0; i < 12; i++) {
        var list1 = document.getElementById('m' + (i + 1));
        var list2 = document.getElementById('v' + (i + 1));
        var note1 = document.getElementById('n' + (i + 1));

        j = (i * 2) + 4;
        configData[j] = list1.value;
        configData[j + 1] = note1.value;
        j = i + 40;
        configData[j] = list2.value;
    }

    return configData;
}

function writeSysex(configData){
    if (configData) {
        var preArray = new Uint8Array([0x64,0x41]);
        var arrayOut = new Uint8Array(preArray.length + configData.length);
        arrayOut.set(preArray);
        arrayOut.set(configData, preArray.length);
        
        output.sendSysex([0, 0x64, 0x41], Array.from(arrayOut));
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
        var preArray = new Uint8Array([0xF0, 0, 0x64,0x41,0x64,0x41]);
        var postArray = new Uint8Array([0xF7]);
        var arrayOut = new Uint8Array(preArray.length + configData.length + 1);
        arrayOut.set(preArray);
        arrayOut.set(configData, preArray.length);
        arrayOut.set(postArray, preArray.length + configData.length);

        saveDataToFile(arrayOut, "automat.syx");
    }
}


