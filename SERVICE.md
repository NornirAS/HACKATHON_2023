# Service

Is a program that should send some data into the network, AI generated result, sensor data and etc... Each service should be documented so anyone can understand what it’s doing. Documentation should contain:

  - **Overview**. Brief description of what the service is doing.
  - **Data schema**. For example: if you have a schema with 2 elements, input, and output then people most likely need to know only about the output element. Combined with the service overview this should provide enough information for end users.
  - **Linking**. How people can link to you. **NB! Maybe some UI can be done for this task**.
  - **Ghosts**. How to receive a ghost. **NB! Ghost should be explained in the presentation**. It can be done manually by the service provider or **NB! Maybe some UI can be done for this task**.
  
## Example

### Description

This is an AI service. I process data from the sensor and share results with the network.

### Data Schema

```xml
<RTW>
  <SENDER></SENDER>
  <PAYLOAD></PAYLOAD>
</RTW>
```

### Linking

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

### Ghosts

Explain how other teams can get a ghost from your service.

  - Contact one of team members.
  - Provide UI.
