module.exports = {
    "extends": "airbnb",
    "rules": {
      "no-console": "off",
      "linebreak-style": ["error","windows"],
		"indent": ["error", "tab"],
		"no-tabs": ["error", {"allowIndentationTabs": true}],
		"react/jsx-indent":["error", "tab"],
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
	"env": {
		"browser": true,
		"node": true,
		"es6": true,
		"jest": true,
		"commonjs": true,
	},
};