import createHiveWS from '@norniras/hive-agent/ws'
import { token, rootDomain } from './config.js'

const test = createHiveWS({
  type: 'channel',
  token,
  rootDomain,
  ghostAddress: 'hackathon/receiver/1',
})

test.open(data => {
  const { RTW } = JSON.parse(data)
  const { SENDER, PAYLOAD } = RTW
  switch (SENDER) {
    case 'hackathon/default':
      console.log(JSON.parse(PAYLOAD))
      break
    default:
      break
  }
})