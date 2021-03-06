import StateApi from '../StateApi';
import { data } from '../testData';

const store = new StateApi(data);

describe('DataApi', () => {
	it('expect test data to have 5 articles', () => {
		const numberOfArticles = data.articles.length;
		expect(numberOfArticles).toBe(5);
	});

	it('exposes 5 articles', () => {
		const numberOfArticles = Object.keys(store.getState().articles).length;
		expect(numberOfArticles).toBe(5);
	});

	it('exposes articles as an object', () => {
		const { articles } = store.getState();
		const articleId = data.articles[0].id;
		const articleTitle = data.articles[0].title;

		expect(articles).toHaveProperty(articleId);
		expect(articles[articleId].title).toBe(articleTitle);
	});

	it('exposes authors as an object', () => {
		const { authors } = store.getState();
		const authorId = data.authors[0].id;
		const authorName = data.authors[0].firstName;

		expect(authors).toHaveProperty(authorId);
		expect(authors[authorId].firstName).toBe(authorName);
	});
});
