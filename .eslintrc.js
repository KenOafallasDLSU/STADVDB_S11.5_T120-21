module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [2, 2]
    },
    "plugins": [
        "html"
    ],
    "settings": {
        "html/indent": "0",
        "html/html-extensions": [".html", ".hbs"],
        "html/report-bad-indent": "error"
    }
};
