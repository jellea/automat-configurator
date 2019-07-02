var output = undefined
var input = undefined
var currentConfig = undefined
var timeoutId = undefined
var updatingUIFromConfig = false

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
                  list2.options[0] = new Option('Default', '0');
                  list2.options[1] = new Option('On/Off', '1');
                  list2.options[2] = new Option('Quad Velocity', '2');
                  list2.options[3] = new Option('Inverse Quad Velocity', '3');
                  list2.options[4] = new Option('Fixed Duration', '4');
                  list2.options[5] = new Option('PWM Velocity', '5');
                  list2.options[6] = new Option('Continous PWM', '6');
                  list2.options[7] = new Option('Hum with controls', '7');
 
                  var list3 = document.getElementById('n' + i);
                  list3.options[0] = new Option('Not Set', '0');
                  list3.options[1] = new Option('1 C#-1', '1');
                  list3.options[2] = new Option('2 D-1', '2');
                  list3.options[3] = new Option('3 D#-1', '3');
                  list3.options[4] = new Option('4 E-1', '4');
                  list3.options[5] = new Option('5 F-1', '5');
                  list3.options[6] = new Option('6 F#-1', '6');
                  list3.options[7] = new Option('7 G-1', '7');
                  list3.options[8] = new Option('8 G#-1', '8');
                  list3.options[9] = new Option('9 A-1', '9');
                  list3.options[10] = new Option('10 A#-1', '10');
                  list3.options[11] = new Option('11 B-1', '11');
                  list3.options[12] = new Option('12 C0', '12');
                  list3.options[13] = new Option('13 C#0', '13');
                  list3.options[14] = new Option('14 D0', '14');
                  list3.options[15] = new Option('15 D#0', '15');
                  list3.options[16] = new Option('16 E0', '16');
                  list3.options[17] = new Option('17 F0', '17');
                  list3.options[18] = new Option('18 F#0', '18');
                  list3.options[19] = new Option('19 G0', '19');
                  list3.options[20] = new Option('20 G#0', '20');
                  list3.options[21] = new Option('21 A0', '21');
                  list3.options[22] = new Option('22 A#0', '22');
                  list3.options[23] = new Option('23 B0', '23');
                  list3.options[24] = new Option('24 C1', '24');
                  list3.options[25] = new Option('25 C#1', '25');
                  list3.options[26] = new Option('26 D1', '26');
                  list3.options[27] = new Option('27 D#1', '27');
                  list3.options[28] = new Option('28 E1', '28');
                  list3.options[29] = new Option('29 F1', '29');
                  list3.options[30] = new Option('30 F#1', '30');
                  list3.options[31] = new Option('31 G1', '31');
                  list3.options[32] = new Option('32 G#1', '32');
                  list3.options[33] = new Option('33 A1', '33');
                  list3.options[34] = new Option('34 A#1', '34');
                  list3.options[35] = new Option('35 B1', '35');
                  list3.options[36] = new Option('36 C2', '36');
                  list3.options[37] = new Option('37 C#2', '37');
                  list3.options[38] = new Option('38 D2', '38');
                  list3.options[39] = new Option('39 D#2', '39');
                  list3.options[40] = new Option('40 E2', '40');
                  list3.options[41] = new Option('41 F2', '41');
                  list3.options[42] = new Option('42 F#2', '42');
                  list3.options[43] = new Option('43 G2', '43');
                  list3.options[44] = new Option('44 G#2', '44');
                  list3.options[45] = new Option('45 A2', '45');
                  list3.options[46] = new Option('46 A#2', '46');
                  list3.options[47] = new Option('47 B2', '47');
                  list3.options[48] = new Option('48 C3', '48');
                  list3.options[49] = new Option('49 C#3', '49');
                  list3.options[50] = new Option('50 D3', '50');
                  list3.options[51] = new Option('51 D#3', '51');
                  list3.options[52] = new Option('52 E3', '52');
                  list3.options[53] = new Option('53 F3', '53');
                  list3.options[54] = new Option('54 F#3', '54');
                  list3.options[55] = new Option('55 G3', '55');
                  list3.options[56] = new Option('56 G#3', '56');
                  list3.options[57] = new Option('57 A3', '57');
                  list3.options[58] = new Option('58 A#3', '58');
                  list3.options[59] = new Option('59 B3', '59');
                  list3.options[60] = new Option('60 C4', '60');
                  list3.options[61] = new Option('61 C#4', '61');
                  list3.options[62] = new Option('62 D4', '62');
                  list3.options[63] = new Option('63 D#4', '63');
                  list3.options[64] = new Option('64 E4', '64');
                  list3.options[65] = new Option('65 F4', '65');
                  list3.options[66] = new Option('66 F#4', '66');
                  list3.options[67] = new Option('67 G4', '67');
                  list3.options[68] = new Option('68 G#4', '68');
                  list3.options[69] = new Option('69 A4',  '69');
                  list3.options[70] = new Option('70 A#4', '70');
                  list3.options[71] = new Option('71 B4',  '71');
                  list3.options[72] = new Option('72 C5',  '72');
                  list3.options[73] = new Option('73 C#5', '73');
                  list3.options[74] = new Option('74 D5',  '74');
                  list3.options[75] = new Option('75 D#5', '75');
                  list3.options[76] = new Option('76 E5',  '76');
                  list3.options[77] = new Option('77 F5',  '77');
                  list3.options[78] = new Option('78 F#5', '78');
                  list3.options[79] = new Option('79 G5',  '79');
                  list3.options[80] = new Option('80 G#5', '80');
                  list3.options[81] = new Option('81 A5',  '81');
                  list3.options[82] = new Option('82 A#5', '82');
                  list3.options[83] = new Option('83 B5',  '83');
                  list3.options[84] = new Option('84 C6',  '84');
                  list3.options[85] = new Option('85 C#6', '85');
                  list3.options[86] = new Option('86 D6',  '86');
                  list3.options[87] = new Option('87 D#6', '87');
                  list3.options[88] = new Option('88 E6',  '88');
                  list3.options[89] = new Option('89 F6',  '89');
                  list3.options[90] = new Option('90 F#6', '90');
                  list3.options[91] = new Option('91 G6',  '91');
                  list3.options[92] = new Option('92 G#6', '92');
                  list3.options[93] = new Option('93 A6',  '93');
                  list3.options[94] = new Option('94 A#6', '94');
                  list3.options[95] = new Option('95 B6',  '95');
                  list3.options[96] = new Option('96 C7',  '96');
                  list3.options[97] = new Option('97 C#7', '97');
                  list3.options[98] = new Option('98 D7',  '98');
                  list3.options[99] = new Option('99 D#7', '99');
                  list3.options[100] = new Option('100 E7', '100');
                  list3.options[101] = new Option('101 F7', '101');
                  list3.options[102] = new Option('102 F#7', '102');
                  list3.options[103] = new Option('103 G7', '103');
                  list3.options[104] = new Option('104 G#7', '104');
                  list3.options[105] = new Option('105 A7', '105');
                  list3.options[106] = new Option('106 A#7', '106');
                  list3.options[107] = new Option('107 B7', '107');
                  list3.options[108] = new Option('108 C8', '108');
                  list3.options[109] = new Option('109 C#8', '109');
                  list3.options[110] = new Option('110 D8', '110');
                  list3.options[111] = new Option('111 D#8', '111');
                  list3.options[112] = new Option('112 E8', '112');
                  list3.options[113] = new Option('113 F8', '113');
                  list3.options[114] = new Option('114 F#8', '114');
                  list3.options[115] = new Option('115 G8', '115');
                  list3.options[116] = new Option('116 G#8', '116');
                  list3.options[117] = new Option('117 A8', '117');
                  list3.options[118] = new Option('118 A#8', '118');
                  list3.options[119] = new Option('119 B8', '119');
                  list3.options[120] = new Option('120 C9', '120');
                  list3.options[121] = new Option('121 C#9', '121');
                  list3.options[122] = new Option('122 D9', '122');
                  list3.options[123] = new Option('123 D#9', '123');
                  list3.options[124] = new Option('124 E9', '124');
                  list3.options[125] = new Option('125 F9', '125');
                  list3.options[126] = new Option('126 F#9', '126');
                  list3.options[127] = new Option('127 G9', '127');

                  var list4 = document.getElementById('c' + i);
                  list4.options[0] = new Option('Normal', '3');
                  list4.options[1] = new Option('Inverse', '-2');
                  const index = i;
                  list4.addEventListener('change', function() {
                        window.drawResponse(index);
                     });
                          
                  var list5 = document.getElementById('du' + i);
                  list5.options[0] = new Option('Not Set', '0');
                  list5.options[1] = new Option('1ms', '1');
                  list5.options[2] = new Option('2ms', '2');
                  list5.options[3] = new Option('3ms', '3');
                  list5.options[4] = new Option('4ms', '4');
                  list5.options[5] = new Option('5ms', '5');
                  list5.options[6] = new Option('6ms', '6');
                  list5.options[7] = new Option('7ms', '7');
                  list5.options[8] = new Option('8ms', '8');
                  list5.options[9] = new Option('9ms', '9');
                  list5.options[10] = new Option('10ms', '10');
                  list5.options[11] = new Option('11ms', '11');
                  list5.options[12] = new Option('12ms', '12');
                  list5.options[13] = new Option('13ms', '13');
                  list5.options[14] = new Option('14ms', '14');
                  list5.options[15] = new Option('15ms', '15');
                  list5.options[16] = new Option('16ms', '16');
                  list5.options[17] = new Option('17ms', '17');
                  list5.options[18] = new Option('18ms', '18');
                  list5.options[19] = new Option('19ms', '19');
                  list5.options[20] = new Option('20ms', '20');
                  list5.options[21] = new Option('21ms', '21');
                  list5.options[22] = new Option('22ms', '22');
                  list5.options[23] = new Option('23ms', '23');
                  list5.options[24] = new Option('24ms', '24');
                  list5.options[25] = new Option('25ms', '25');
                  list5.options[26] = new Option('26ms', '26');
                  list5.options[27] = new Option('27ms', '27');
                  list5.options[28] = new Option('28ms', '28');
                  list5.options[29] = new Option('29ms', '29');
                  list5.options[30] = new Option('30ms', '30');
                  list5.options[31] = new Option('31ms', '31');
                  list5.options[32] = new Option('32ms', '32');
                  list5.options[33] = new Option('33ms', '33');
                  list5.options[34] = new Option('34ms', '34');
                  list5.options[35] = new Option('35ms', '35');
                  list5.options[36] = new Option('36ms', '36');
                  list5.options[37] = new Option('37ms', '37');
                  list5.options[38] = new Option('38ms', '38');
                  list5.options[39] = new Option('39ms', '39');
                  list5.options[40] = new Option('40ms', '40');
                  list5.options[41] = new Option('45ms', '45');
                  list5.options[42] = new Option('50ms', '50');
                  list5.options[43] = new Option('55ms', '55');
                  list5.options[44] = new Option('60ms', '60');
                  list5.options[45] = new Option('65ms', '65');
                  list5.options[46] = new Option('70ms', '70');
                  list5.options[47] = new Option('75ms', '75');
                  list5.options[48] = new Option('80ms', '80');
                  list5.options[49] = new Option('85ms', '85');
                  list5.options[50] = new Option('90ms', '90');
                  list5.options[51] = new Option('95ms', '95');
                  list5.options[52] = new Option('100ms', '100');
                  list5.options[53] = new Option('105ms', '105');
                  list5.options[54] = new Option('110ms', '110');
                  list5.options[55] = new Option('115ms', '115');
                  list5.options[56] = new Option('120ms', '120');
                  list5.disabled = true;

            }
    });


function connect (){
  if (WebMidi.enabled) {
    WebMidi.disable();
  }

  WebMidi.enable(function (err) {
    var conne = document.getElementById("connected")

    if (!err) {
      output = WebMidi.getOutputByName("dadamachines automat");
      input = WebMidi.getInputByName("dadamachines automat");

      if (output && input) {
                 conne.innerText = "automat connected";
                 conne.style.color = "#47b535";
                 readVersion();
                 readSysex();
      } else {
                 conne.innerText = "could not find automat";
                 conne.style.color = "red";
      }
    } else {
                 conne.innerText = "please accept webmidi (in Google Chrome)";
                 conne.style.color = "red";
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
    if (e.data[1] == 0 && e.data[2] == 0x21 && e.data[3] == 0x3D &&
        e.data[4] == 0x64) {
        if (e.data[5] == 0x41) {
            showSysexConfig(e.data.slice(6, -1));
            var b1 = document.getElementById("save1")
            b1.disabled = false
        } else if (e.data[5] == 0x56) {
            var versMajor = e.data[6];
            var versMinor = e.data[7] * 256 + e.data[8];
            var versFix = e.data[9];
            var version = versMajor + '.' + versMinor + '.' + versFix;
            var pField = document.getElementById("version_config");
            pField.innerText = "Version is: " + version;
            var capabilities = e.data[11];
            if (capabilities == 0) {
                loadMainPage();
            }
            
            var numPins = e.data[13];
            for(var i = 12; i > numPins; --i) {
                document.getElementById('r' + i).style.display = "none";
            }
        }
    }
}

function readSysex(){
    if (!input.hasListener('sysex', "all", sysexListener)) {
        input.addListener('sysex', "all", sysexListener);
    }

    output.sendSysex([0, 0x21, 0x3D] ,[0x64,0x41,0x67,0x65,0x74,0x63]);
}

function readVersion(){
    if (!input.hasListener('sysex', "all", sysexListener)) {
        input.addListener('sysex', "all", sysexListener);
    }

    output.sendSysex([0, 0x21, 0x3D] ,[0x64,0x41,0x67,0x65,0x74,0x76]);
}

function showSysexConfig(configData){
    updatingUIFromConfig = true;
    currentConfig = configData;
    var pField = document.getElementById("sysex_config");
    var displayData = "";
    var nvData = undefined;
    var veloData = undefined;
    var gateData = undefined;
    var numPins = 12;
    var offset = 8;

    if(configData[0] == 0x70 && configData[1] == 0x69 &&
        configData[2] == 0x6E && configData[3] == 0x73) {
        numPins = configData[7];
        nvData = configData.slice(offset, offset + (2 * numPins));
        offset += 2 * numPins;
        console.log('num pins = ' + numPins);
    }

    if(configData[offset] == 0x76 && configData[offset + 1] == 0x6C &&
       configData[offset + 2] == 0x74 && configData[offset + 3] == 0x79) {
        offset += 4;
        veloData = configData.slice(offset, offset + (3 * numPins));
        offset += 3 * numPins;
        console.log('have veloData');
    }

    if(configData.length >= (offset + (2 * numPins) + 4)) {
      if(configData[offset] == 0x67 && configData[offset + 1] == 0x61 &&
         configData[offset + 2] == 0x74 && configData[offset + 3] == 0x65) {
          offset += 4;
          var rawGateData = configData.slice(offset, offset + (2 * numPins));
          gateData = new Uint16Array(numPins);
          for(var i = 0; i < numPins; i++) {
              var lowerPart = rawGateData[i * 2];
              var upperPart = rawGateData[i * 2 + 1];
              gateData[i] = lowerPart | (upperPart << 7);
          }
          console.log('have gateData');
      }
    }

    if (nvData && veloData) {
        var j;
        for(var i = 0; i < numPins; i++) {
            displayData += "pin: " + (i + 1);
            displayData += "    channel: " + nvData[i];
            displayData += "    note: " + nvData[i + numPins];
            displayData += "    program: " + veloData[i];
            displayData += "    msMin: " + veloData[i + numPins];
            displayData += "    msMax: " + veloData[i + numPins + numPins];
            if (gateData) {
                displayData += "    gate: " + gateData[i];
            }
            displayData += "\r\n";

            var list1 = document.getElementById('m' + (i + 1));
            var list2 = document.getElementById('v' + (i + 1));
            var note1 = document.getElementById('n' + (i + 1));
            var curve1 = document.getElementById('c' + (i + 1));
            var dur1  = document.getElementById('du' + (i + 1));
            var jsr = jsrArray[i];

            note1.value = nvData[i + numPins];
            list1.value = nvData[i];
            list2.value = veloData[i];
            curve1.value = veloData[i + numPins + numPins + numPins];
            jsr.setValue(0, veloData[i + numPins]);
            jsr.setValue(1, veloData[i + numPins + numPins]);
            // need to set this again in case the range was inconsistent with the first set
            jsr.setValue(0, veloData[i + numPins]);
            if (gateData) {
                dur1.value = gateData[i];
            }
        }
        
        for(var i = 12; i > numPins; --i) {
            document.getElementById('r' + i).style.display = "none";
        }
        console.log(displayData);
    }

    outputModeSanityCheck();
    pField.innerText = displayData;
    updatingUIFromConfig = false;
}

function outputModeSanityCheck() {
    for(var i = 0; i < 12; i++) {
        var list1 = document.getElementById('m' + (i + 1));
        var list2 = document.getElementById('v' + (i + 1));
        var note1 = document.getElementById('n' + (i + 1));
        var dur1  = document.getElementById('du' + (i + 1));

        if(list2.value == '7') {
            // this is for hum mode
            note1.disabled = true;
            dur1.disabled = true;
            jsrArray[i].disable();
            list1.options[0].disabled = true;
            note1.value = '0';
            dur1.value = '0';
            if(list1.value == '0') {
                list1.value = '1';
            }
        } else if (list2.value == '4') {
            // this is for fixed duration mode
            dur1.disabled = false;
            note1.disabled = false;
            jsrArray[i].disable();
            list1.options[0].disabled = false;
            if(dur1.value  == '0') {
                dur1.value = '40';
            }
        } else if (list2.value == '0') {
            // this is for normal mode
            note1.disabled = false;
            dur1.disabled = true;
            jsrArray[i].enable();
            list1.options[0].disabled = false;
            dur1.value = '0';
        } else {
            note1.disabled = false;
            dur1.disabled = true;
            jsrArray[i].disable();
            list1.options[0].disabled = false;
            dur1.value = '0';
        }
    }
}

function getConfigDataFromForm() {
    var numPins = 12;
    
    if (document.getElementById('r7').style.display === "none") {
        numPins = 6;
    }
    
    var configData = new Uint8Array(16 + (numPins * 8));

    var header1 = new Uint8Array([0x70,0x69,0x6E,0x73]);
    var header2 = new Uint8Array([0x76,0x6C,0x74,0x79]);
    var header3 = new Uint8Array([0x67,0x61,0x74,0x65]);

    configData.set(header1);
    configData.set(header2, 8 + (numPins * 2));

    var j;
    configData[7] = numPins;
                   
    for(var i = 0; i < numPins; i++) {
        var list1 = document.getElementById('m' + (i + 1));
        var list2 = document.getElementById('v' + (i + 1));
        var note1 = document.getElementById('n' + (i + 1));
        var range1 = document.getElementById('range-' + (i + 1) + '-1');
        var range2 = document.getElementById('range-' + (i + 1) + '-2');
        var curve1 = document.getElementById('c' + (i + 1));
        var gate1 = document.getElementById('du' + (i + 1));

        j = i + 8;
        configData[j] = list1.value;
        configData[j + numPins] = note1.value;
        j = i + 12 + (numPins * 2);
        configData[j] = list2.value;
        configData[j + numPins] = range1.value;
        configData[j + numPins + numPins] = range2.value;
        configData[j + numPins + numPins + numPins] = curve1.value;

        j = (2 * i) + 16 + (numPins * 6);
        configData[j] = gate1.value & 0x07f;
        configData[j + 1] = (gate1.value & 0x3F80) >> 7;
    }

    return configData;
}

function writeSysex(configData){
    if (configData) {
        var preArray = new Uint8Array([0x64,0x41]);
        var arrayOut = new Uint8Array(preArray.length + configData.length);
        arrayOut.set(preArray);
        arrayOut.set(configData, preArray.length);

        output.sendSysex([0, 0x21, 0x3D], Array.from(arrayOut));
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
        var preArray = new Uint8Array([0xF0, 0, 0x21,0x3D,0x64,0x41]);
        var postArray = new Uint8Array([0xF7]);
        var arrayOut = new Uint8Array(preArray.length + configData.length + 1);
        arrayOut.set(preArray);
        arrayOut.set(configData, preArray.length);
        arrayOut.set(postArray, preArray.length + configData.length);

        saveDataToFile(arrayOut, "automat.syx");
    }
}

function readSysexConfigFromFile() {
    var fileElem = document.getElementById("fileElem");
    fileElem.click();
}

function readSysexFile(e) {
    var file = e[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        showSysexConfig(new Uint8Array(contents.slice(6, -1)));
    };
    reader.readAsArrayBuffer(file);
}

var warningIssued = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function testNode(index) {
    if (!warningIssued) {
        alert("Please note, test mode works best when note and channel settings are saved on the automat");
        warningIssued = true;
    }
    var list1 = document.getElementById('m' + index);
    var note1 = document.getElementById('n' + index);

    var channel = 1;
    if (list1.value != '0') {
        channel = list1.value;
    }

    var note = note1.value;

    if(note != '0') {
        for(var i = 0; i < 5; ++i) {
            output.playNote(note, channel, {duration: 1100, rawVelocity:true, velocity: 1})
            await sleep(1200);
            output.playNote(note, channel, {duration: 1100, rawVelocity:true, velocity: 64})
            await sleep(1200);
            output.playNote(note, channel, {duration: 1100, rawVelocity:true, velocity: 126});
            await sleep(1200);
        }
    }
}

function loadMainPage(){
    window.location.href = "./index.html";
}

function drawResponse(index) {
    var min_range = document.getElementById('range-' + index + '-1');
    var max_range = document.getElementById('range-' + index + '-2');
    var curve = document.getElementById('c' + index);
    var canvas = document.getElementById('d' + index);
    
    var range = ((1000 - 127) * (max_range.value - min_range.value) / 127.0) + 0.5;
    var base_val = ((1000 - 127) * min_range.value / 127.0) + 0.5;
    
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, 100);

    for(var i = 1; i < 128; ++i) {
        if(max_range.value == 0) {
            ctx.lineTo(i, 0);
            continue;
        }

        // Map the input range of 0..127 to a value between 0..1.
        var fraction = i / 127.0;
        
        // Map 0..1 to 0..1, but let it grow exponentially.
        var y = Math.pow(fraction, 3);
        
        if (curve.value == -2) {
            fraction = (127 - i) / 127.0;
            y = 1 - Math.pow(fraction, 2);
        }
        
        // Convert to a value between 0..1000. We add the base
        // value to assure that we produce growing values; otherwise
        // the first numbers in the sequence would be rounded to the
        // same values.
        var v = i + (y * range) + base_val;
        
        // Round 500..1000 in 10 steps increment.
        if (v >= 500) {
            v -= v % 10;
            // Round 150..499 in 5 steps increment.
        }
        else if (v >= 150) {
            v -= v % 5;
        }
        
        ctx.lineTo(i, 100 - (v / 10));
    }
    
    ctx.stroke();
}

async function updateMaxMinRange(index, input, value) {
    drawResponse(index);

    if (updatingUIFromConfig) {
        return;
    }
    
    var list1 = document.getElementById('m' + index);
    var note1 = document.getElementById('n' + index);
    var note = note1.value;

    var channel = 1;
    if (list1.value != '0') {
        channel = list1.value;
    }
    
    console.log(input, value);
    var message = [0x6D, 0x4D, index - 1, value];

    if (input.id.endsWith('-1')) {
        message[1] = 0x6D;
    }
    
    if (timeoutId != undefined) {
        clearTimeout(timeoutId);
    }
    
    // Don't overload MIDI.   Limit to 10 messages per second
    timeoutId = setTimeout(function(){
                                  output.sendSysex([0, 0x21, 0x3D], message);
                                  timeoutId = undefined;} , 100);
 }
