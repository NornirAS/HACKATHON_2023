import { createReadStream} from 'fs'
import csv from 'csv-parser'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import createHiveWS from '@norniras/hive-agent/ws'
import { token, rootDomain, ghostAddress } from './config.js'

const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)

const results = []

const processLineByLine = async () => {
  await createReadStream(resolve(__dirname, 'data.csv'))
    .pipe(csv())
    .on('data', (data) => {
      results.push({
        Temperature: data['Temperature[C]'],
        Humidity: data['Humidity[%]'],
        TVOC: data['TVOC[ppb]'],
        eCO2: data['eCO2[ppm]'],
        ['Raw H2']: data['Raw H2'],
        ['Raw Ethanol']: data['Raw Ethanol'],
        Pressure: data['Pressure[hPa]'],
        ['PM1.0']: data['PM1.0'],
        ['PM2.5']: data['PM2.5'],
        ['NC0.5']: data['NC0.5'],
        ['NC1.0']: data['NC1.0'],
        ['NC2.5']: data['NC2.5'],
        CNT: data.CNT
      })
    })
    .on('end', () => {
      console.log('All data written. Check the results.')
    });
}

processLineByLine()

const test = createHiveWS({
  type: 'string',
  token,
  rootDomain,
  ghostAddress,
})

test.open()

// To test basic communication we will send data every 5 seconds
setInterval(() => {
  const random = Math.floor(Math.random() * results.length);
  test.sendData({
    SENDER: 'hackathon/default',
    PAYLOAD: JSON.stringify(results[random])
  })
}, 5000)
