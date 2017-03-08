# create-function

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
