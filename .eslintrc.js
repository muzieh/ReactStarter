module.exports = {
    "extends": "airbnb",
    "rules": {
      "no-console": "off",
      "linebreak-style": ["error","windows"],
		"indent": ["error", "tab"],
		"no-tabs": ["error", {"allowIndentationTabs": true}],
		"react/jsx-indent":["error", "tab"],
		"react/jsx-indent-props":["error", "tab"],
		"react/prop-types":["off"],
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