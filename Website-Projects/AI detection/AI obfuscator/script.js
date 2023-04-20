


function generateRandomArray(length, min, max) {
  let arr = [];
  let lengthVal = parseInt(length);
  let minVal = parseInt(min);
  let maxVal = parseInt(max);

  for (let i = 0; i < lengthVal; i++) {
    arr.push(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  }
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr;
}

function createOutput() {
	var input = document.getElementById("input").value;

  var nonSpaces = [
    "︀", //[U+FE00]
    "︁", //[U+FE01]
    "︂", //[U+FE02]
    "︃", //[U+FE03]
    "︄", //[U+FE04]
    "︅", //[U+FE05]
    "︆", //[U+FE06]
    "︇", //[U+FE07]
    "︈", //[U+FE08]
    "︉", //[U+FE09]
    "︊", //[U+FE0A]
    "︋", //[U+FE0B]
    "︌", //[U+FE0C]
    "︍", //[U+FE0D]
    "︎", //[U+FE0E]
    "️", //[U+FE0F]

    "឵"// [U+17B5]
    ];

var splitInput = input.split("");
var output = "";

const length = document.getElementById('length').value;
const min = document.getElementById('min').value;
const max = document.getElementById('max').value;
let randomNums1 = generateRandomArray(length, min, max);

var randoSpace;



for (var i = 0; i < splitInput.length; i++) {
    randoSpace = Math.floor(Math.random(0,nonSpaces.length-1));
  if (splitInput[i] != " "){output += ""+splitInput[i]+"";}
  if (randomNums1.includes(i)) {output += nonSpaces[randoSpace];}
  if (splitInput[i] == " "){  output += " ";}
}

	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = output;
}



