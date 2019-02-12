class DataApi {
	constructor(data) {
		this.data = data;
		this.articles = data.articles;
	}


	getArticles() {
		return this.articles.reduce((arts, art) => {
			const a = arts;
			a[art.id] = art;
			return arts;
		}, {});
	}

	static getAuthors() {
		return {};
	}
}

export default DataApi;
