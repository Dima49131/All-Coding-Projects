function convertInput() {
  const inputText = document.getElementById('input-text').value;
  let outputText = '';
  for (let i = 0; i < inputText.length; i++) {
    const char = inputText.charAt(i);
    if (char === ' ') {
      outputText += ' ';
    } else if (char.match(/[A-Z]/)) {
      outputText += '*' + (char.charCodeAt(0) - 64) + ' ';
    } else if (char.match(/[a-z]/)) {
      outputText += (char.charCodeAt(0) - 96) + ' ';
    } else if (char.match(/[0-9]/)) {
      outputText += '#' + char + ' ';
    } else {
      outputText += char + ' ';
    }
  }
  document.getElementById('output-text').value = outputText.trim();
}

function convertOutput() {
  const inputText2 = document.getElementById('input-text2').value;
  const words = inputText2.split(' ');
  let outputText = '';
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word === '') {
      outputText += ' ';
    } else if (word.charAt(0) === '*') {
      const number = parseInt(word.substring(1));
      const charCode = number + 64;
      outputText += String.fromCharCode(charCode);
    } else if (word.charAt(0) === '#') {
      outputText += word.substring(1);
    } else if (!isNaN(word)) {
      const number = parseInt(word);
      if (isNaN(number)) {
        continue;
      }
      const charCode = number + 96;
      outputText += String.fromCharCode(charCode);
    } else {
      outputText += word + ' ';
    }
  }
  document.getElementById('output-text2').value = outputText;
}


function clearInput() {
  document.getElementById('input-text').value = '';
  document.getElementById('output-text').value = '';
}
function clearOutput() {
  document.getElementById('output-text2').value = '';
  document.getElementById('input-text2').value = '';
}



function copyText(outputId) {
  const outputBox = document.getElementById(outputId);
  outputBox.select();
  document.execCommand("copy");
  
}

function pasteText1(className1,className2) {
  document.getElementById(className1).value = document.getElementById(className2).value;
    convertInput();
}

function pasteText2(className1,className2) {
  document.getElementById(className1).value = document.getElementById(className2).value;
    convertOutput();
}
