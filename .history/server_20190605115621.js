const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('kashyap/show', (req, res) => {
        const actualPage = '/show/:id'
        const queryParams = { title: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    
    server.listen(3003, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3003')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })