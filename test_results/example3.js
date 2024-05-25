// The file containing the SOAP client information protocol is located at 'src/api/client.js'
// It is used to send a SOAP request to a provided endpoint to get client information based on clientId.

/* 
Example of a transformed REST request.

Instead of using XML to structure the request data, REST APIs often require the data to be sent in JSON format.
For most cases, the same data used by the SOAP protocol can be transferred via REST.
The main difference between SOAP and REST is that REST APIs are resource-based while SOAP APIs are action-based.
This means a lot of times SOAP requests take the form of a function call, while REST APIs are more like manipulating objects (Clients, Transactions, Products, etc.) in a database.
*/

import axios from 'axios';

// REST APIs typically require headers to specify the data type of the request body.
// In this case, we set the 'Content-Type' header to 'application/json'.
const headers = { 'Content-Type': 'application/json' };

// The data to be sent in the request needs to be in JSON format 
// Below is an example of transforming the above SOAP request to JSON format.
const data = {
  clientId: "12345" 
};

// Make request to the REST API 
// The URL typically includes the specific resource you want to access, in this case: the 'Clients' resource.
// And an id specifying which instance of the resource we want to access.
// We use the HTTP 'GET' method because we are retrieving data.
axios.get('http://example.com/Clients/12345', { headers, data })
  .then(response => {
    // handle success
    console.log(response);
  })
  .catch(error => {
    // handle error
    console.log(error);
  });

/* 
Note: The REST approach simplifies the request structure by removing the specific action (GetClientInfo).
The resource and instance are included directly in the URL while the data is structured in JSON format.
*/
