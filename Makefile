install:
		npm ci
brain-games:
		node /bin/brain-games.js
publish:
		npm publish --dry-run
lint:
		npx eslint .
fix:
		npx eslint . --fix
brain-even: 
		node bin/brain-even.js
brain-calc:
		node bin/brain-calc.js
brain-gcd:
		node src/bin/brain-gcd.js
brain-progression:
		node src/bin/brain-progression.js
brain-prime:
		node src/bin/brain-prime.js