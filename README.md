# Brain & Nornir Hackathon 2023

Build a collection of services for processing data, analyzing trends, and triggering actions based on certain conditions. By adding new services to the network it becomes smarter. Each team will build services to provide some value to the Hive network. There are no limitations on the type of service.

## Setup

Each team will be granted with predefined domain, service, token, authToken, and username(email).
- Subdomain (team name)
- Token and AuthToken for authentication
- Username (email)
- Ghost of [DEFAULT SERVICE](./DEFAULT_SERVICE.md)

## Flow

1. To test that you can receive data from **Default Service** you need to see if you have ghosts for that service. Use **Get Ghosts** [API](./HIVE_API.md#get-ghost) to get all your ghosts. Once you got ghosts, you have everything to start the communication. Examples can be found below in [**COMMUNICATION**](#communication) section.

#### Read about the service in **EXAMPLES** section below.

2. Create your own service. Use **Create Service** API to do so.

3. Assign 1 ghost to that service. Use **Add Ghost** API to do so.

4. Test the communication for that service.

5. Add link to **Default Service**. Use **Update Links** API to do so.

6. Even there are links between services, you need to tell the system what ghosts should talk to each other. Use **Add Morphed Ghost** API to do so. **NB!** refDomain, refService, refGhostID is from service that you lionking to. If service B linking to A, then you add ghost from service A to service B.

7. Test the communication. You should be able to receive the data from **Default Service**.

This is the basics, once you get yourself familiar with that flow, you can start to experiment.
 
## Bounty program

As Hive is still in the proof of concept, participants can find some bugs or features that can be fixed or have better implementations. I think if students can explain with an argument the problem that they found, they can be rewarded with some points for their team.

## EXAMPLES

[SERVICE](./SERVICE.md)

## API

[HIVE API](./HIVE_API.md)

## COMMUNICATION

[HTTP](./HTTP.md)

[WEBSOCKET](./WEBSOCKET.md)
