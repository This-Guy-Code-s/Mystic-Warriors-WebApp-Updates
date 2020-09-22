import {
LANGUAGE,MODAL
,SUB
,VIDEOS,ERR_VIDEOS
,IMAGES,ERR_IMAGES
} from './actions'


import {vidz} from './vidz'

import {pix} from './pix'



const initialState = {
	useEspanol:window.sessionStorage.getItem('useEspanol')?JSON.parse(window.sessionStorage.getItem('useEspanol')):false,
	modalIsOut:false,

	
	subMsg:'',
	subIsSuccess:null,


	videos: vidz || [],

	images: pix || [],
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





			case SUB://subscription attempt done
			return {
				...state,
				subMsg:action.payload.msg,
				subIsSuccess:action.payload.stat
			}




			case VIDEOS:
			return {
				...state,
				videos:action.payload
			}
			case ERR_VIDEOS:
			return {
				...state,
				videos:vidz
			}





			case IMAGES:
			return {
				...state,
				images:action.payload
			}
			case ERR_IMAGES:
			return {
				...state,
				images:pix
			}
		default:
		return state
	}
}





export default reducer