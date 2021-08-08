import axios from 'axios';

const API = {
	getRecords: () => {
		return axios.get('/api/record');
    },
    createRecord: data => {
        return axios.post('/api/record/', data)
    },
    deleteRecord: data => {
        return axios.post('/api/record/delete', data)
    }
	
};

export default API;