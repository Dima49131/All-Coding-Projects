


function runCode() {
    const input = document.getElementById("input").value;
    // these characters are meant for mainly english
    let allNormalCharsOrigin =  ' "!@#$%^&*(){}[]~`-_=+\\|/?<,>.;:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"\n\t'+"'";
    let allNormalChars = [];
    // adding any initial values
    allNormalChars.push(302); // double quote from google docs
    allNormalChars.push(8217); // single quote from google docs
    allNormalChars.push(8216); // single quote from google docs
    allNormalChars.push(8220); // single quote from google docs
    allNormalChars.push(8221); // single quote from google docs
    for (let i = 0; i < allNormalCharsOrigin.length; i++) {allNormalChars.push(allNormalCharsOrigin.charCodeAt(i));}

    var output = [];
    var evaluate = 0;
    for (let i = 0; i < input.length; i++) {
        for (let q = 0; q < allNormalChars.length;q++){
            if (input.charCodeAt(i) != allNormalChars[q]){evaluate++;}
        }
    if (evaluate >= allNormalChars.length){output.push({symbol: input[i], index: i,ascii : input.codePointAt(i)});}
        evaluate = 0;
    }



    
    let outputHtml = "";

    if (output.length > 1) {
      for (let i = 0; i < output.length; i++) {
        const charCode = output[i].symbol.charCodeAt(0);
        outputHtml += `<div class="grid-item">Symbol detected is "${output[i].symbol}" , at character ${output[i].index}, Unicode value is ${charCode}</div>`;
      }
    } else {
      outputHtml = `<div class="grid-item">Nothing Found</div>`;
    }
    
    // set the content of the output-container element to the formatted string
    document.getElementById("output-container").innerHTML = outputHtml;
    
    
}
  



