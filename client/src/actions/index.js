import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';


export const fetchUser= () => async dispatch =>{
	const res = await axios.get('/api/current_user');

	dispatch({type: FETCH_USER, payload: res.data});
};
/*export const fetchUser= () =>{
	return function(dispatch){
		axios
			.get('/api/current_user')
			.then(res=> dispatch({type: FETCH_USER, payload: res}));
	};

};*/


export const submitSurvey = (values, history) => async dispatch => {
  console.log(values);
  const res = await axios.post('/api/surveys', values);
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};