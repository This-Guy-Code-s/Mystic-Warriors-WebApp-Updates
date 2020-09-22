import axios from 'axios'
export const LANGUAGE = 'LANGUAGE'
export const MODAL = 'MODAL'


export const SUB = 'SUB'


export const VIDEOS = 'VIDEOS'
export const ERR_VIDEOS = 'ERR_VIDEOS'




export const IMAGES = 'IMAGES'
export const ERR_IMAGES = 'ERR_IMAGES'


// TOGGLE LANGUAGE FOR THE APPLICATION (SPANISH OR ENGLISH)
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


// GET MUSIC VIDEOS FROM DATABASE OR IN DEFAULTS 'VIDZ.JS'
export const getVideos = () => dispatch =>{

	return axios.get(process.env.REACT_APP_VIDOES)
	.then(res=>{
		console.log(res.data)
		return dispatch({type:VIDEOS,payload:res.data})
	})
	.catch(err=>{
		console.log(err)
		return dispatch({type:ERR_VIDEOS})
		
	})
}




// GET IMAGES FROM DATABASE OR IN DEFAULTS 'PIX.JS'
export const getPix = () => dispatch =>{

	return axios.get(process.env.REACT_APP_PIX)
	.then(res=>{
		console.log(res.data)
		return dispatch({type:IMAGES,payload:res.data})
	})
	.catch(err=>{
		console.log(err)
		return dispatch({type:ERR_IMAGES})
		
	})
}





// SUBSCRIBE TO THE MYSTIC WARRIORS BAND
export const subscribe = (obj) => dispatch =>{
	dispatch({type:SUB,payload:{msg:'loading',stat:'loading'}})
	return axios.post(process.env.REACT_APP_SUB,obj)
	.then(res=>{
		console.log(res.data)
		dispatch({type:SUB,payload:{msg:res.data,stat:true}})
		setTimeout(()=>{return dispatch({type:SUB,payload:''})},5000)
	})
	.catch(err=>{
		console.log(err)
		dispatch({type:SUB,payload:{msg:'I\'m sorry, you cannot subscribe now \n try again later',stat:false}})
		setTimeout(()=>{return dispatch({type:SUB,payload:''})},5000)
	
	})
}


// HEADER HIDES WHEN MODALS SHOW, BETTER FOR UX
export const toggleHeaderBasedOnModals = () => dispatch =>{
	return dispatch({type:MODAL})
}