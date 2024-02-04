let input = document.querySelector(".inputbox");
let btn_pass = document.querySelector(".btn_pass");
let btn_copy = document.querySelector(".btn_copy");


/* Function to generate combination of password */

function generatePass() {
	let pass = '';
	let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$%^&*+-!~`';

	for (let i = 1; i <= 12; i++) {

		let char = Math.floor(Math.random() * str.length + 1);

		pass += str.charAt(char)
        
	}

	return pass;
}


btn_pass.addEventListener("click" , function(){

   input.value =  generatePass();
   
})



btn_copy.addEventListener("click" , function(){

    navigator.clipboard.writeText(input.value);
    window.alert("Copied: " + input.value);

});


