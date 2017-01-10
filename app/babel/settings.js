import { validPass,showError } from './validate/validAuth.js'
window.addEventListener('load',()=>{
	var oldpassElem = $('[name="oldpass"]')
	var newpassElem = $('[name="newpass"]')
	$(':checkbox').checkboxpicker()
	$('.showpass').on('change',()=>{
		if($('.showpass').prop('checked'))
			newpassElem.attr('type','text');
		else
			newpassElem.attr('type','password');
	})
	$('.changepass').on('submit',(e)=>{
		e.preventDefault()
		$('.alert-error').remove();
		var oldpass = oldpassElem.val()
		var newpass = newpassElem.val()
		if(validPass(newpass,$('.error'))){
			$.get(
				'../api/changepass.php',
				{
					newpass: newpass,
					oldpass:oldpass
				},
				(data)=>{
					if(data == 1)
						showError(
							$('.error'),
							'Пароль успешно сменен',
							'success'
						)
					else{
						showError(
							$('.error'),
							data,
							'danger'
						)
					}
				}
			)
		}
	})
})