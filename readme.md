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
    <link rel="stylesheet" href="https://www.unpkg.com/alert-for-web@0.1.2/dist/style.css">
    <script src="app.js" type="module">
  </head>
  <body>
    <button class="btn">Show Alert</button>
  </body>
```

``app.js ``
```javascript
//import package
import showAlert from "https://www.unpkg.com/alert-for-web@0.1.2/dist/main.js";

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

| Option | Type | Default | Optional | Description |
| ------ | ---- | ------- | -------- | ----------- |
| title | string | null | no | The title of the alert |
| message | string | null | no | The message of the alert |
| level | string | success | yes | The level of the alert. Possible values are: success, warning, error. |
| button | string | Close | yes | The text of the button |

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@Shishir98123](https://www.github.com/Shishir98123)
- [@coderSuresh](https://www.github.com/coderSuresh)
