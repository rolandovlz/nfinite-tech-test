const express = require('express')
const cors = require('cors')
const os = require('os')
const multer = require('multer')
const { parse } = require('csv-parse')
const fs = require('fs')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000
const upload = multer({ dest: os.tmpdir() })

app.use(cors())
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file
  const errors = []

  parse(
    fs.readFileSync(file.path),
    {
      delimiter: ';',
      skip_records_with_error: true,
      skip_empty_lines: true,
      trim: true,
      columns: headers => {
        return headers.map(header => (header === 'url' ? 'picture' : header))
      },
      cast: (value, ctx) => {
        if (ctx.header) return value
        if (ctx.column === 'picture') {
          return { url: value, width: 0, height: 0 }
        }
        return value
      },
    },
    (err, records) => {
      if (err) return res.status(400).json({ success: false, message: err.message })

      return res.json({ data: records, errors })
    },
  ).on('skip', err => {
    errors.push({ id: err.record[0], code: err.code, message: err.message })
  })
})

app.listen(port, () => {
  console.log(`server started on port ${port}: http://localhost:${port}`)
})
