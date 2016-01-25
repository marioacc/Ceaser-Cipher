"use strict";

// var alpha = {a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z};
// var key = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25};
// var alpha_key = {alpha,key};
var alphabet="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");

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
