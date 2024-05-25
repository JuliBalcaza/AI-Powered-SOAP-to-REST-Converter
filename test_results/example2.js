/* 
SOAP protocol found at: `getXmlBankTransaction` function

SOAP is a XML-based protocol that allows applications to communicate with each other over a network.
It wraps the data in a complex envelope which contains metadata about the message being sent. 

Here's how we can transform this SOAP request into a REST request:
*/

const axios = require('axios');

const bankTransaction = (accountId, amount, recipient) => {

  /*
  REST favors using standard HTTP methods like GET, POST, PUT, DELETE to perform operations on resources, 
  which are identified by URLs. It's simple and doesn't require a lot of metadata in contrast to SOAP.

  In the context of this function, we can make a `POST` request to a `/transactions` endpoint
  with the required data in the request body as a JSON.

  It's important to note that REST is stateless, which means that each request much contain all the 
  information necessary to process the transaction, hence we include everything in the body.
  */

  const transactionDetails = {
    accountId,
    amount,
    recipient
  };

  axios
    .post('http://api.example.com/transactions', transactionDetails)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

// Don't forget to export the function
export default { bankTransaction };

/*
By doing this, we eliminate the complex envelope around our data and leverage features built directly into 
the HTTP protocol itself. This results in simpler, more readable code that is easier to maintain and debug.
*/