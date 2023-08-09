# Alert for Web - Show alert message on web page

[![npm version](https://badge.fury.io/js/alert-for-web.svg)](https://badge.fury.io/js/alert-for-web)
[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

This is a simple script that shows an alert message on a web page. It can be used to show a message on a web page when a certain event occurs. For example, when a backup is completed, or when a long running process is finished.

## installation

```
npm install alert-for-web
```

## Usage

``index.html``

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Alert for Web</title>
    <!-- package css -->
    <link rel="stylesheet" href="/node_modules/alert-for-web/dist/style.css">
    <script src="app.js" type="module">
  </head>
  <body>
    <button class="btn">Show Alert</button>
  </body>
```

``app.js ``
```javascript
//import package
import showAlert from "/node_modules/alert-for-web/dist/main.js";

    //use any element to trigger the alert
    const btn = document.querySelector('.btn');

    btn.addEventListener("click", () => {
    //call the showAlert function
      showAlert({
        title: "Success",
        message: "This is a success alert",
        level: "success",
        button: "Close"
      })
    })
```

## Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| title | string | null | The title of the alert |
| message | string | null | The message of the alert |
| level | string | success | The level of the alert. Possible values are: success, warning, error. |
| button | string | Close | The text of the button |

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@Shishir98123](https://www.github.com/Shishir98123)
- [@coderSuresh](https://www.github.com/coderSuresh)
