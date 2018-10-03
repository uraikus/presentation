console.log('Starting server...')
const express = require('express')
const SSE = require('express-sse')
const app = express()
const port = 3777
var sse = new SSE()

app.get('/sse', sse.init)
app.use(express.static('./dist'))
app.listen(port, () => console.log(`Listening on port ${port}!`))

export default sse
