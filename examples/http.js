import hiveHTTP from '@norniras/hive-agent/http'

// Add your token and test the communication

const hiveHTTP = createHiveHTTP({
  token: 'yours_token',
  rootDomain: 'example.com',
  ghostAddress: 'domain/service/ghostID',
})

const dataHandler = data => {
  // do something with the data
  console.log(data) // Hello world shold be printed
}

hiveHTTP
  .channelInit({
    dataHandler, // callback to handle data
    restartOnClose: true, // is service should be restarted on connection close
  })
  .listen()

// This will be example service data schema that will have single element TXT
const data = {
  TXT: 'Hello World' 
}

// To test basic communication we will send data every 5 seconds
setInterval(() => {
  hiveHTTP.sendData(data)
}, 5000)