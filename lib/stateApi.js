class StateApi {
	constructor(data) {
		this.data = {
			articles: StateApi.mapToObject(data.articles),
			authors: StateApi.mapToObject(data.authors),
			searchTerm: '',
		}
	}

	static mapToObject(array) {
		return array.reduce((acc, obj) => {
			const accTemp = acc;
			accTemp[obj.id] = obj;
			return accTemp;
		}, {});
	}

	lookupAuthor = (authorId) => {
		return this.data.authors[authorId];
	}

	getState = () => {
		return {
			articles: this.data.articles,
			authors: this.data.authors,
		};
	}
}

export default StateApi;
