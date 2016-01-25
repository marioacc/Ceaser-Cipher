"use strict";
var alphabet="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");


//This fixes JS negative mod bug.
Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

function decode() {
	var cipher_text = $('[name="cipherText"]').val().toLowerCase();
	var plainTextInput =$("input[name='plainText']");
	var key = parseInt($('[name="key"]').val(),10) * -1; //to negative
	var plain_text = codeString(cipher_text, key);
	plainTextInput.val(plain_text);
}

function encode (){
  var plainText= $("input[name='plainText']").val().toLowerCase();
  var key=parseInt($("input[name='key']").val(),10);
  var cipherTextInput =$("input[name='cipherText']");
  var cipherText= codeString(plainText,key);
  cipherTextInput.val(cipherText);

}


function codeString(text,key){
  var alphabet="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
  var codedString="";
  var codedChar="";
  for (var i = 0; i < text.length; i++) {
    if (text[i]!==" ") {
      var index = (alphabet.indexOf(text.charAt(i))+key).mod(26); 
      codedChar=alphabet[index];
      codedString=codedString+codedChar;
    }else {
      codedString= codedString+" ";
    }
  }
  return codedString;
}

function brute() {
	//Get the values of the texts
	var cipher_text = $('[name="cipherText"]').val().toLowerCase();
	var plain_text= $("input[name='plainText']").val().toLowerCase();
	//Calculate a provisional key according to first chars.
	var key = alphabet.indexOf(cipher_text.charAt(0)) - alphabet.indexOf(plain_text.charAt(0));
	//Checks id the "Key cannot be calculated is already put on div p"
	var no_key_append = false;
	//This array saves the possible keys, including the one of this first chars
	var keys = [];
	//The div to paste the results in case there's no match for the key,
	var no_key_p = $('#no_key');
	//Erases the previous results in the div.
	no_key_p.text(" ");
	//Goes through the texts
	for (var i = 1; i < plain_text.length; i++) {
		//Calculate the difference between each char, called key.
		var possible_key = alphabet.indexOf(cipher_text.charAt(i)) - alphabet.indexOf(plain_text.charAt(i));
		if(cipher_text !== " " && plain_text !== " "){ //Check if neither of the texts is over
			if ( possible_key !== key){ //If there's a mismatch to the previus calculated key.
				if (no_key_append === false){ //If nothing had been written on the div.
					keys.push(key); //add the first char key
					no_key_p.text("Key cannot be calculated"); //write to the div
					no_key_append = true; //Change so it cant change the whole div text again.
				}
				no_key_p.append("<br>possible key: " + possible_key); //Appends the new possible key.
				keys.push(possible_key); //add to the array,
			} else {
				keys.push(possible_key); //Add the correct key to the array, in case of a mismatch in the next chars.
				$("input[name='key']").val(key); //sets the correct key value.
			}
		}
	}
	if(no_key_append === true){ //If it was a mismatch in keys...
		for (var i=0; i<keys.length; i++){ //go through the array of possible keys,
			var cipher_text = $('[name="cipherText"]').val().toLowerCase(); //get the ciphertext.
			if (keys[i] !== key) { //grab only the mismatched keys...
				var coded_possible_plain = codeString(cipher_text, keys[i]);
				no_key_p.append("<br>Plain text for key: " + (keys[i]*-1) + " is: " +coded_possible_plain); 
			}

		}
		//finally calculate for the first key (this is in case this is the most repeated, which is likely the case.)
		no_key_p.append("<br>Plain text for key: " + key + " is: " + codeString(cipher_text,(key*-1))); 
	} 
	
} //Brute force end.
