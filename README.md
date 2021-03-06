# Realtime Markdown Editor

An editor made using
 - [Showdown](https://github.com/showdownjs/showdown) - Converts markdown text to beautiful HTML
 - [ShareJS](http://sharejs.org/) - allows for realtime editing of this textbox
 - [Node.js](https://nodejs.org/) - backend framework
 - [Redis](http://redis.io/) - where we store our markdown documents
 - [Twitter Bootstrap](http://getbootstrap.com/) - makes everything a little prettier

and following the steps from [scoth.io](https://scotch.io/tutorials/building-a-real-time-markdown-viewer) without deploying to Heroku.

## How to use?

```
$ git clone https://github.com/ggdaltoso/MarkdownEditor.git
$ cd MarkdownEditor
$ npm install
$ node server.js
```

Navigate to http://localhost:8000 and be happy! :)

*You can share your content by passing one id, like http://localhost:8000/foo
