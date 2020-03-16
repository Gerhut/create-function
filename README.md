# create-function

[![Build Status](https://travis-ci.org/Gerhut/create-function.svg?branch=master)](https://travis-ci.org/Gerhut/create-function)
[![Coverage Status](https://coveralls.io/repos/github/Gerhut/create-function/badge.svg?branch=master)](https://coveralls.io/github/Gerhut/create-function?branch=master)
[![dependencies Status](https://david-dm.org/Gerhut/create-function/status.svg)](https://david-dm.org/Gerhut/create-function)
[![devDependencies Status](https://david-dm.org/Gerhut/create-function/dev-status.svg)](https://david-dm.org/Gerhut/create-function?type=dev)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Create functions supports partial options.

## Install

    $ npm install create-function
    
## Usage

```javascript
var jQuery = require('jquery')
var createFunction = require('create-function')

var ajax = createFunction(jQuery.ajax)
ajax({ url: 'https://api.github.com/' }) // Same as call jQuery.ajax

var post = ajax.create({ type: 'POST' })
post({ url: 'https://api.github.com/' }) // POST to GitHub API

var authorizedPost = post.create({
    username: 'user',
    password: 'pass'
})
authorizedPost({ url: 'https://api.github.com/' }) // POST to GitHub API with authorization
```

## License

MIT
