const getXmlTwoFactor = (idClient, idChannel, idUser, mto) => {
const xmlTwoFactor = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
<soap:Body>
    <TWOFACTOR xmlns="http://tempuri.org/">
    <idclient>${idClient}</idclient>
    <channel>${idChannel}</channel>
    <iduser>${idUser}</iduser>
    <mto>${mto}</mto>
    </TWOFACTOR>
</soap:Body>
</soap:Envelope>`;
return xmlTwoFactor;
};

export default { getXmlTwoFactor };
