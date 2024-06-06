/**
 * Validacao de formulario
 * @author Chuck Norton
 */

function validar() {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	
	if (nome === "") {
		alert('Campo nome necessário')
		frmContato.nome.focus()
		return false
	} else if (fone === "") {
		alert('Campo fone necessário')
		frmContato.fone.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}
}