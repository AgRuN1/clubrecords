require('../stylus/main.styl')
import { validPass, validLogin } from './validate/validAuth'
import Share from './share'
window.addEventListener('load',()=>{
	$('.link-vk').parent().on('click',()=>{
		Share.vkontakte('Club Records','','Отдыхайте слушая хорошую музыку');
	})
	$('.link-ok').parent().on('click',()=>{
		Share.odnoklassniki('Отдыхайте слушая музыку на Club Records');
	})
	$('.link-twitter').parent().on('click',()=>{
		Share.twitter('Отдыхайте слушая музыку на Club Records');
	})
	$('.link-google').parent().on('click',()=>{
		Share.google('Отдыхайте слушая музыку на Club Records');
	})
	$('.link-facebook').parent().on('click',()=>{
		Share.facebook('Отдыхайте слушая музыку на Club Records');
	})
	$('.auth').on('submit',(e)=>{
		$('.alert-error').remove()
		var login = $('[name="login"]').val()
		var pass = $('[name="pass"]').val()
		var errorElem = $('.error')
		if(!validLogin(login,errorElem) || !validPass(pass,errorElem))
			e.preventDefault()
	})
	$('#auth').on('shown.bs.modal', function () {
	   $('[name="login"]').focus();
	})
	if(location.search.substring(1,6)=='login')
		$('#auth').modal('show')
});	 
