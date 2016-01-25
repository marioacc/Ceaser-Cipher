"use strict";
var alphabet="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");

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
      codedChar=alphabet[(alphabet.indexOf(text.charAt(i))+key)%26];
      codedString=codedString+codedChar;
    }else {
      codedString= codedString+" ";
    }
  }
  return codedString;
}
