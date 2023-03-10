# Default service

This is an example service that will constantly send data and will be available for all participants. The data can be used for any kind of scenarios. 
Data is taken from a Kaggle [Smoke Detection Dataset | Kaggle](https://www.kaggle.com/datasets/deepcontractor/smoke-detection-dataset) and The dataset is nearly 60.000 readings long.

**Problem Type** : Machine learning, Supervised learning algorithm binary classification.

**Target Variable** : Fire Alarm

### Data Schema

```xml
<RTW>
  <SENDER></SENDER> <!--Sender element is THIS serviceAddress. You need to know where data comming from-->
  <PAYLOAD></PAYLOAD> <!--Will be a JSON string that contains all the data from data model below-->
</RTW>
```

## Data model

  - Temperature (Air Temperature)
  - Timestamp UTC seconds
  - Humidity (Air Humidity)
  - TVOC(total Volatile Organic Compounds; measured in parts per billion)
  - eCO2(co2 equivalent concentration; calculated from different values like TVCO)
  - Raw H2(aw molecular hydrogen; not compensated (Bias, temperature, etc.))
  - Raw Ethanol(raw ethanol gas)
  - Pressure[hPa] (Air Pressure)
  - PM1.0 (particulate matter size < 1.0 µm (PM1.0). 1.0 µm < 2.5 µm (PM2.5))
  - PM2.5(particulate matter size < 1.0 µm (PM1.0). 1.0 µm < 2.5 µm (PM2.5))
  - NC0.5(Number concentration of particulate matter. This differs from PM because NC gives the actual number of particles in the air. The raw NC is also classified by the particle size: < 0.5 µm (NC0.5); 0.5 µm < 1.0 µm (NC1.0); 1.0 µm < 2.5 µm (NC2.5))
  - NC1.0(Number concentration of particulate matter. This differs from PM because NC gives the actual number of particles in the air. The raw NC is also classified by the particle size: < 0.5 µm (NC0.5); 0.5 µm < 1.0 µm (NC1.0); 1.0 µm < 2.5 µm (NC2.5);)
  - NC2.5(Number concentration of particulate matter. This differs from PM because NC gives the actual number of particles in the air. The raw NC is also classified by the particle size: < 0.5 µm (NC0.5); 0.5 µm < 1.0 µm (NC1.0); 1.0 µm < 2.5 µm (NC2.5))
  - CNT(Sample counter
  - Fire Alarm ground truth is "1" if a fire is there

## Links

serviceAddress = hackathon/default

To add link to this service update links of your service with serviceAddress above.

## Ghost

Each team will have 1 ghost from that service.
  
## Examples of use case

NB! You are not limited to examples below.

  - Normal indoor
  - Normal outdoor
  - Indoor wood fire, firefighter training area
  - Indoor gas fire, firefighter training area
  - Outdoor wood, coal, and gas grill
  - Outdoor high humidity
