function count() {
    var inputStirng = document.querySelector("#inputString").value.toLowerCase();

    let result = document.querySelector("#result");
    
    let char = inputStirng.split('');

    let vowelCount = 0;
    let constantCount = 0;

    for(var i = 0; i < inputStirng.length; i++){
        if (char[i] === "a" || char[i] === "e" || char[i] === "i" || char[i] === 'o' || char[i] === 'u'){
            vowelCount++;
        }
        else{
            constantCount++;
        }
    }
    result.innerHTML = "Vowel Count = " + vowelCount + "<br>" + "Constant Count = " + constantCount;
  }