class StateApi {
	constructor(data) {
		this.rawData = data;
	}

	static mapToObject(array) {
		return array.reduce((acc, obj) => {
			const accTemp = acc;
			accTemp[obj.id] = obj;
			return accTemp;
		}, {});
	}

	getArticles() {
		return StateApi.mapToObject(this.rawData.articles);
	}

	getAuthors() {
		return StateApi.mapToObject(this.rawData.authors);
	}
}

export default StateApi;
