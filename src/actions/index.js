import { PROVIDER_URL, SERVICE_URL } from "../utils/Const";
import { callService } from "../utils/CallService";
import { types } from "../types/types";


export const fetchServices = () => {
	return (dispatch) => {
		callService(SERVICE_URL)
			.then((data) => {
				dispatch(services(data));
			})
			.catch((e) => {
				console.error(e);
			});
	};
};

export const services = (data) => ({
	type: types.services,
	payload: {
		data: data.data,
		meta: data.meta
	},
});

export const fetchProviders = () => {
	return (dispatch) => {
		callService(PROVIDER_URL)
			.then((data) => {
				dispatch(providers(data));

			})
			.catch((e) => {
				console.error(e);
			});
	};
};



export const providers = (data) => ({
	type: types.providers,
	payload: {
		data: data.data,
		meta: data.meta
	},
});

export const filterService = (serviceId) => ({
	type: types.filter,
	payload: {
		serviceId
	},
});
