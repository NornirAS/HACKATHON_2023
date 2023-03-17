# HIVE

Everyone can use a Hive UI. It was build with limited features to make it more user friendly. There will be an option to explore more features on request.

## Login

We will use passwordless authentification so you need to insert and you will get magic link on your email to login.

**Hive UI URL**: domain.cioty.com

token: aToken_36d8715e3531fd8e8c01fcbfd26bf5af1908e14f15014d2d14817b568bc0bb0e

email: gio.elektronikk@gmail.com

password: 

## Flow

1. Create subdomain - name it as your team name, or company name or whatever you want related to what you planning to build. Example .

2. Create service - name it as what your service will do. Here you define data schema. Data shema whould be writen in XML format. Timeout is used by HTTP and define after what time channel will be closed if there will be no incomming messages.

```xml
<!-- First start with RTW tags. This is important!!! -->
<RTW></RTW>
<!-- You want to put data elements inside the RTW tag -->
<!-- Fir example here you define DATA element. Now you can send and receive DATA to/from your service. -->
<RTW><DATA></DATA></RTW>
```

[SERVICE](./SERVICE.md)

3. Add ghost - ghost is digital reperesentation of physical object or instance of a software. Once you add ghost to your service you can test the communication.

4. Test the communication - First you can test with cURL. 

```bash
# To send data
curl -k https://{{ domain }}.cioty.com/{{ service }} -H "Synx-Cat: 1" -d "token={{ token }}&objectID=1&data=hello world"

# To receive data
curl -k https://{{ domain }}.cioty.com/{{ service }} -H "Synx-Cat: 4" -d "token={{ token }}&objectID=1"
```

[HTTP](./HTTP.md)

[WEBSOCKET](./WEBSOCKET.md)

5. NB! You need to have two services to complete this step. To be able connect services together you need to add link. Basically on service level you will say that service "A" want to receive data from service "B". And you need to specify exactly which data you interested in.

```xml
<!-- Service A -->
<RTW><DATA>@domain/serviceA#PAYLOAD@</DATA></RTW>
<!-- Service B -->
<RTW><PAYLOAD></PAYLOAD></RTW>
```

As you can see you literally saying what and where data you interested in.

6. NB! You need to have two services and at least 1 ghost for each to complete this step. You have services linked together, but you still need to perform an action on the ghost level. Each service can have multiple ghosts so here you need to tell the system which ghosts hould be connected.F From example above we have 2 services A and B. A linking to B. Then we need to add morphed ghost (service B) to ghost from service A. This way you can add multiple morphed ghosts.

7. Test the communication. If you will send data to service B you should receive it on service A.
 
This is the basics. If you want more please contact Nornir team.
