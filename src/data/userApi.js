import axios from 'axios';

export default class userApi {
	
	static saveUser(user) {
		return axios.post("http://localhost:4000/users", user)
                .then(res => res.data);
	}

	static getUser() {
		return axios.get("http://localhost:4000/users")
				.then(res =>res.data)
	}
	
}

