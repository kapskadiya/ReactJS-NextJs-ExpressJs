const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get("/show/:slug",(req, res)=>{
      return app.render(req, res, "/show", { slug: req.params.slug })
    })

    server.get('/show/:id', (req, res) => {
        const actualPage = '/show'
        const queryParams = { id: req.params.id }
        return app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    
    server.listen(3001, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3001')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })