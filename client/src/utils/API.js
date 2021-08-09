import axios from 'axios';

const API = {
	getRecords: () => {
		return axios.get('/api/');
    },
    createRecord: data => {
        return axios.post('/api/', data)
    },	
};

export default API;