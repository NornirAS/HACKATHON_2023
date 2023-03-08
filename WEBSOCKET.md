# How to connect using websocket

To be able to send and receive data to and from Hive, a user should be able to open a WebSocket client connection against a connection point (ghost) inside the HIVE.

## Connection Point

**ghostAddress** = {{ domain }}/{{ service }}/{{ objectID }}

**serviceURL** = wss://websocket.cioty.com/{{ ghostAddress }}/channel

**token** = {{ token }}

## How to

  1. Create a WS instance using the given {{ serviceURL }}.
  2. Once WS is opened, a user should send a given token as part of authentication. The token should be sent as a JSON string. WS send “{\”token\”:\”token\”}”
  3. Listen for messages. The message will come in JSON.
  4. Handle messages. All messages are wrapped inside the RTW object. Everything inside is data that you can work with. Example:
    a. Get a JSON string.
    b. Parse JSON string.
    c. Get a JSON object.
    d. Access data “object.RTW”.
    e. Do something with it.
  5. Before sending a message, a user should send the address (ONLY ONCE - this is important),  where he wants to send it, but in our case, the sender and receiver are at the same address. The address should be sent as a JSON string “{\”url\”:\”{{ghostAddress}}\”}”. After the URL is sent, the user can send data.
