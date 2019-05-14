const createGreeting = require('./controller');

test('get hello world test', () => {
	const name = '윤석';
	const result = createGreeting(name);

	expect(result).toBe(`${name} hello`);
});
