import {LANGUAGE,MODAL} from './actions'

const initialState = {
	useEspanol:window.sessionStorage.getItem('useEspanol')?JSON.parse(window.sessionStorage.getItem('useEspanol')):false,
	modalIsOut:false
}




const reducer = (state = initialState, action) =>{
	switch(action.type){
		

		case MODAL://if a modal form,shopping cart,ect. is showing or not
		return {
			...state,
			modalIsOut:!state.modalIsOut
		}
		case LANGUAGE://toggles language
			return {
				...state,
				useEspanol:action.payload
			}

		default:
		return state
	}
}





export default reducer