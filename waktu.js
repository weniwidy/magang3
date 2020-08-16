const timeZoneConverter = require('time-zone-converter')
const newDateTime = timeZoneConverter('2018/10/11 18:00:00', 8, -4, 'YYYY/MM/DD HH:mm:ss')

console.log(newDateTime)