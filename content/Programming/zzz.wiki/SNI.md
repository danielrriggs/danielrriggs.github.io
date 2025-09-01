Server Name Indication.

An extension to the [[TLS]] protocol which allows a client to indicate which hostname (domain) it is trying to connect to during the SSL/TLS handshake process. Added to TLS in 2003.

- **Multiple Certificates on One IP:** Before SNI, if multiple websites used the same IP address, the server could only present one SSL/TLS certificate. With SNI, a server can host multiple SSL/TLS certificates for different domains on the same IP address.
- **SNI field** is part of the "ClientHello" message in the TLS handshake.