# Brain & Nornir Hackathon 2023

Build a collection of services for processing data, analyzing trends, and triggering actions based on certain conditions. By adding new services to the network it becomes smarter. Each team will build services to provide some value to the Hive network. There are no limitations on the type of service.

## Service

Is a program that should have input and output that should be sent back to the network. Each service should be documented so anyone can understand what it’s doing. Documentation should contain:

  - **Overview**. Brief description of what the service is doing.
  - **Data schema**. For example: if you have a schema with 2 elements, input, and output then people most likely need to know only about the output element. Combined with the service overview this should provide enough information for end users.
  - **Linking**. How people can link to you. **NB! Maybe some UI can be done for this task**.
  - **Ghosts**. How to receive a ghost. **NB! Ghost should be explained in the presentation**. It can be done manually by the service provider or **NB! Maybe some UI can be done for this task**.
  
### Example

#### Description

This is an AI service. I process data from the sensor and share results with the network.

#### Data Schema

```xml
<RTW>
  <INPUT></INPUT> <!--Private. You don’t need to share that element with anyone else-->
  <OUTPUT></OUTPUT> <!--Public. This element is for the linking from the other services-->
</RTW>
```

#### Linking

Service address is a string that contains domain and service names in format **domain/service**.
Linking element is **@domain/service#element@**.

  1. Add link for some service by using API.
  2. Update data schema with the linking to element.
  
Example below showes how service B data schema should look like to be able receive OUTPUT from service A.

```xml
<!--Service A-->
<RTW>
  <INPUT></INPUT>
  <OUTPUT></OUTPUT>
</RTW>

<!--Service B-->
<RTW>
  <INPUT>@BRAIN/A#OUTPUT@</INPUT>
  <OUTPUT></OUTPUT>
</RTW>
```

#### Ghosts

Exaplin how other teams can get a ghost from your service.

  - Contact one of team members.
  - Provide UI.

## Setup

Each team will be granted with predefined domain, token, and username(email). With this setup, they will be able to perform all necessary API calls listed below.

## API

### Create service

### Update Service

### Add ghosts

### Get links

### Update links

### Transfer ownership of a ghost

### Accept ghost

### Reject ghost

### Give read access

### Remove read access

### Add morphed ghost

### remove morphed ghost

## Bounty program

As Hive is still in the proof of concept, participants can find some bugs or features that can be fixed or have better implementations. I think if students can explain with an argument the problem that they found, they can be rewarded with some points for their team.

