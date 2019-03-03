class StateApi {
	constructor(data) {
		this.data = {
			articles: StateApi.mapToObject(data.articles),
			authors: StateApi.mapToObject(data.authors),
			searchTerm: '',
			currentTime: new Date(),
		}

		this.subscriptions = {};
		this.lastSubscriptionId = 0;

	}

	static mapToObject(array) {
		return array.reduce((acc, obj) => {
			const accTemp = acc;
			accTemp[obj.id] = obj;
			return accTemp;
		}, {});
	}

	subscribe = cb => {
		this.lastSubscriptionId++;
		this.subscriptions[this.lastSubscriptionId] = cb;
		return this.lastSubscriptionId;
	}

	unsubscribe = subscriberId => {
		delete this.subscriptions[subscriberId];
	}

	notifySubscribers = () => {
		Object.values(this.subscriptions).forEach(cb => cb());
	}

	lookupAuthor = (authorId) => {
		return this.data.authors[authorId];
	}

	getState = () => {
		return {
			articles: this.data.articles,
			authors: this.data.authors,
			searchTerm: this.data.searchTerm,
			currentTime: this.data.currentTime,
		};
	}

	mergeWithState = (stateChange) => {
		this.data = {
			...this.data,
			...stateChange
		}
		this.notifySubscribers();
	}

	setSearchTerm = (searchTerm) => {
		this.mergeWithState({
			searchTerm,
		});
		this.data.searchTerm = searchTerm;
	}

	startClock = () => {
		setInterval(() => {
			this.mergeWithState({
				currentTime: new Date()
			})
		}, 1000)
	}
}

export default StateApi;
