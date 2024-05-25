const getXmlClientInfo = (clientId) => {
const xmlClientInfo = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
<soap:Body>
    <GetClientInfo xmlns="http://example.com/">
    <clientId>${clientId}</clientId>
    </GetClientInfo>
</soap:Body>
</soap:Envelope>`;
return xmlClientInfo;
};

export default { getXmlClientInfo };
