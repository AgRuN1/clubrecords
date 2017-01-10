export function showError(elem,text,alert){
	elem.append('<aside class="alert alert-'
		+alert+
		' alert-error"><strong>'
		+text+
		'</strong></aside>')
}
export function validLogin(login,elem){
	login = login.trim()
	if(!login){
		showError(elem,'Логин не введен', 'danger');
		return false
	}else if(login.length < 4){
		showError(elem,'Логин слишком короткий','danger')
		return false
	}
	return true
}
export function validPass(pass,elem){
	pass = pass.trim()
	if(!pass){
		showError(elem,'Пароль не введен', 'danger');
		return false
	}else if(pass.length < 6){
		showError(elem,'Пароль слишком короткий','danger');
		return false
	}
	return true	
}