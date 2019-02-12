class DataApi {
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
		return DataApi.mapToObject(this.rawData.articles);
	}

	getAuthors() {
		return DataApi.mapToObject(this.rawData.authors);
	}
}

export default DataApi;
