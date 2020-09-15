export const LANGUAGE = 'LANGUAGE'
export const MODAL = 'MODAL'



export const toggleLanguage = () => dispatch =>{//TOGGLES LANGUAGE 
	const lango  = JSON.parse(window.sessionStorage.getItem('useEspanol')) || false
		switch(lango){
			case false://if we are not using spanish language, switch to spanish
			window.sessionStorage.setItem('useEspanol',true)
			return dispatch({type:LANGUAGE,payload:true})

			case true://if we are using spanish language switch back to english
			window.sessionStorage.setItem('useEspanol',false)
			return dispatch({type:LANGUAGE,payload:false})

			default://return false by default even tho it should never make it here
			window.sessionStorage.removeItem('useEspanol')
			return false
		}


		}




export const toggleHeaderBasedOnModals = () => dispatch =>{
	return dispatch({type:MODAL})
}