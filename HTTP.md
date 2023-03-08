# How to connect using HTTPS

## Connection point

**serviceURL** = https://{{ doamain }}.cioty.com/{{ service }}

**method** = POST

**baseBody** = token={{ token }}&objectID={{ ghostID }}

## Send 

To send data you will need to send POST request using “Synx-Cat 1” in the header section against your own service. With HTTP data sent as query string where, each data element is a key.

body = {{ baseBody }}&output={{ yourServiceOutputValue }}”

**headers**

```json
{
	"Content-Type": "application/x-www-form-urlencoded"
  "Synx-Cat": "1"
}
```

## Receive 

To receive data you will need to send a POST request using “Synx-Cat 4” in the header section. We use long pooling, so the response body will contain an object with a readable stream. Depending on the language you should be able to read this stream. JavaScript examples are provided at the end of this document. 

body = baseBody

**headers**

```json
{
	"Content-Type": "application/x-www-form-urlencoded"
  "Synx-Cat": "4"
}
```

## You can test the communication using Curl

### Example Send:

curl -k {{ serviceURL }} -H "Synx-Cat: 1" -d "token={{ token }}&objectID={{ ghostID }}&output={{ yourServiceOutputValue }}"

### Example Receive:

curl -k {{ serviceURL }} -H "Synx-Cat: 4" -d "token={{ token }}&objectID={{ ghostID }}"

[JavaScript Library](https://github.com/NornirAS/hive-agent/blob/main/src/http/README.md)
