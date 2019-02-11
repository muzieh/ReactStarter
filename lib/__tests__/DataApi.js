import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
	it('expect test data to have 5 articles', () => {
		const numberOfArticles = data.articles.length;
		expect(numberOfArticles).toBe(5);
	});

	it('exposes 5 articles', () => {
		const numberOfArticles = api.articles.length;
		expect(numberOfArticles).toBe(5);
	});

	it('exposes articles as an object', () => {
		const articles = api.getArticles();
		const articleId = data.articles[0].id;
		const articleTitle = data.articles[0].title;

		expect(articles).toHaveProperty(articleId);
		expect(articles[articleId].title).toBe(articleTitle);
	});

	it('exposes authors as an object', () => {

	});
});
