const express = require('express')
const router = express.Router()
const timeZoneConverter = require('time-zone-converter')

// ini route nya
router.get('/', (req, res) => {
    const from = req.query.from
    const to = req.query.to
    const time = req.query.time
    /* const newDateTime = timeZoneConverter('2018/10/11 18:00:00', -2, 4, 'YYYY/MM/DD HH:mm:ss')
     */
    res.send('saya dari ' + from + ',mau ke ' + to + ' pada hari ' + time + 'apaa')
})

// export routing nya
module.exports = router