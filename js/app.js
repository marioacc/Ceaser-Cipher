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
	var cipher_text = $('[name="cipherText"]').val().toLowerCase();
	var plain_text= $("input[name='plainText']").val().toLowerCase();
	var key = alphabet.indexOf(cipher_text.charAt(0)) - alphabet.indexOf(plain_text.charAt(0));
	var no_key_append = false;
	var keys = [];
	var no_key_p = $('#no_key');
	no_key_p.text(" ");
	//console.log(key);
	for (var i = 1; i < plain_text.length; i++) {
		var possible_key = alphabet.indexOf(cipher_text.charAt(i)) - alphabet.indexOf(plain_text.charAt(i));
		if(cipher_text !== " " && plain_text !== " "){
			if ( possible_key !== key){
				//console.log("Key cannot be calculated, possible key: " + possible_key);
				
				if (no_key_append === false){
					keys.push(key);
					no_key_p.text("Key cannot be calculated");
					no_key_append = true;
				}
				no_key_p.append("<br>possible key: " + possible_key); 
				keys.push(possible_key);
			} else {
				keys.push(possible_key);
				$("input[name='key']").val(key);
			}
		}
	}
	if(no_key_append === true){
		for (var i=0; i<keys.length; i++){
			var cipher_text = $('[name="cipherText"]').val().toLowerCase();
			if (keys[i] !== key) {
				var coded_possible_plain = codeString(cipher_text, keys[i]);
				no_key_p.append("<br>Plain text for key: " + keys[i] + " is: " +coded_possible_plain); 
		}
	}
	} 
	
}
