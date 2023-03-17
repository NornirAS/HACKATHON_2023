import createHiveWS from '@norniras/hive-agent/ws'
import { token, rootDomain } from './config.js'

// Create a client connection.
const example = createHiveWS({
  type: 'channel',
  token,
  rootDomain,
  ghostAddress: 'example/example/1',
})

// Open a channel
example.open(data => {
  // When using WebSocket data will come in JSON format.
  const { RTW } = JSON.parse(data)
  // RTW object wrapping the main data schema
  const { SENDER, PAYLOAD } = RTW
  // In this example we use switch/case statement to perform an action on specific incoming data.
  switch (SENDER) {
    case 'hackathon/data':
      // IF data come from 'hackathon/data' service
      // handle this data.
      console.log(JSON.parse(PAYLOAD))
      break
    default:
      break
  }
})

// Send data
example.send({
  sender: 'example/example',
  payload: 'some data'
})