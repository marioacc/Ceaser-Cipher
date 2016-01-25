var alpha = {a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z};
var key = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25};
var alpha_key = {alpha,key};

function decoder() {
	var cipher_text = $('[name="cipherText"]').val();
	console.log("Cipher Text:" + cipher_text);
	var key = $('[name="key"]').val();
	console.log("Key:" + cipher_text);
	if(cipher_text!== null) {
		console.log("Decyphering");
	}
}