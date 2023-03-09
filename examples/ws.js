import createHiveWS from '@norniras/hive-agent/ws'

const test = createHiveWS({
  type: 'channel',
  token: 'yours_token',
  rootDomain: 'example.com',
  ghostAddress: 'domain/service/ghostID',
})

test.open(data => console.log(data)) // Hello world shold be printed

// This will be example service data schema that will have single element TXT
const data = {
  TXT: 'Hello World'
}

// To test basic communication we will send data every 5 seconds
setInterval(() => {
  test.sendData(data)
}, 5000)