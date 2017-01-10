import { validPass, validLogin } from './validate/validAuth.js'
window.addEventListener('load',()=>{
	$('.auth').on('submit',(e)=>{
		$('.alert-error').remove()
		var login = $('[name="login"]').val()
		var pass = $('[name="pass"]').val()
		var elemError = $('.error');
		if(
			!validLogin(login,elemError)
			||
			!validPass(pass,elemError)
		)
			e.preventDefault()
	});	
});