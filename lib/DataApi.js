class DataApi {
	constructor(data) {
		this.data = data;
		this.articles = data.articles;
	}


	getArticles() {
		return this.articles.reduce((arts, art) => {
			let a = arts;
			a[art.id] = {
				id: art.id,
				title: art.title,
			};
			return arts;
		}, {});
	}

	static getAuthors() {
		return {};
	}
}

export default DataApi;
