
// Select field id
let dimimal = document.getElementById("dicimal")
let binary = document.getElementById("binary")
let octal = document.getElementById("octal")
let hexadici = document.getElementById("hexadacimal")
let reset = document.getElementById("reset")

//Dicimal Convert to 
dimimal.addEventListener('keypress', function (e) {
    
    if (e.key == 'Enter') {
        let val = parseInt(e.target.value)
        let hexa = val.toString(16).toUpperCase()
        let Octal = val.toString(8)
        let binary = val.toString(2)

    
    binary.value = binary
    octal.value = Octal
    hexadici.value = hexa
    }

    
    
    
})
binary.addEventListener('keypress', function (e) {
    
    if (e.key == 'Enter') {
        let val = parseInt(e.target.value)
        let h = parseInt(val, 2).toString(16).toUpperCase()
        let o = parseInt(val, 2).toString(8)
        let b = parseInt(val, 2).toString(2)
        let d = parseInt(val, 2).toString(10)
        

    
        binary.value = b
        octal.value = o
        hexadici.value = h
        dimimal.value = d
    }

    
    
    
})
octal.addEventListener('keypress', function (e) {
    
    if (e.key == 'Enter') {
        let val = parseInt(e.target.value)
        let h = val.toString(16).toUpperCase()
        let b = val.toString(2)
        let d = val.toString(10)

    
    binary.value = b
        hexadici.value = h
        dimimal.value = d
    }
})
hexadici.addEventListener('keypress', function (e) {
    
    if (e.key == 'Enter') {
        let val = e.target.value
        let bb = parseInt(val, 16)
        let i = bb.toString(2)
        let d = bb.toString(10)
        let o = bb.toString(8)

    
    binary.value = i
        dimimal.value = d
        octal.value = o
    }
})


reset.addEventListener('click', function(){

    dimimal.value = ""
    binary.value = ""
    octal.value = ""
    hexadici.value = ""
})

//--------------Type Conversion
let textfield = document.getElementById('textField')
let binaryField = document.getElementById('binaryField')

textfield.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        let val = e.target.value
        var result = "";
        // value string itaret and convert to binary
		for (var i = 0; i < val.length; i++) {
            var bin = val[i].charCodeAt().toString(2);
            //new Binary array 
			result += Array(8 - bin.length + 1).join("0") + bin + " ";
        } 
        //Show value binaryField 
        binaryField.value = result
        
    }
    
})

binaryField.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        let str = e.target.value
    
        let bytes = str.split(' ');
   
        let output = '';
        //String iterate and convert
        for (let k = 0; k < bytes.length; k++){
            output += String.fromCharCode(convertToDecimal(bytes[k]));
        }

        return  textfield.value = output;
        }

        function convertToDecimal(byte) {
        let result = 0;

        byte = byte.split('');
        byte.reverse();
        

        for (let a = 0; a < byte.length; a++){
            if (byte[a] === '1'){
            result += 2 ** a;
            }
        }
        console.log("Result ", result)
        return result;
            }
})