'use strict'

const http = require( 'http' )
const url = require( 'url' )

// Constants
const PORT = 3001
const HOST = '0.0.0.0'

// server
const httpServer = http.createServer( ( req, res ) => {
  res.writeHead( 200, {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  })
  res.write( 'Hello from Service A \n' )
  res.end()
})

httpServer.listen( PORT, HOST, () => {
  console.log( `Running on http://${HOST}:${PORT}` )
})

