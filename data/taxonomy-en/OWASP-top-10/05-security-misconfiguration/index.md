# Security Misconfiguration
## Description
The application might be vulnerable if the application is:

- Missing appropriate security hardening across any part of the application stack or improperly configured permissions on cloud services.
- Unnecessary features are enabled or installed (e.g., unnecessary ports, services, pages, accounts, or privileges).
- Default accounts and their passwords are still enabled and unchanged.
- Error handling reveals stack traces or other overly informative error messages to users.
- For upgraded systems, the latest security features are disabled or not configured securely.
- The security settings in the application servers, application frameworks (e.g., Struts, Spring, ASP.NET), libraries, databases, etc., are not set to secure values.
- The server does not send security headers or directives, or they are not set to secure values.
- The software is out of date or vulnerable (see A06:2021-Vulnerable and Outdated Components).

Without a concerted, repeatable application security configuration process, systems are at a higher risk.

## How to Prevent
- A repeatable hardening process makes it fast and easy to deploy another environment that is appropriately locked down. Development, QA, and production environments should all be configured identically, with different credentials used in each environment. This process should be automated to minimize the effort required to set up a new secure environment.
- A minimal platform without any unnecessary features, components, documentation, and samples. Remove or do not install unused features and frameworks.
- A task to review and update the configurations appropriate to all security notes, updates, and patches as part of the patch management process (see A06:2021-Vulnerable and Outdated Components). Review cloud storage permissions (e.g., S3 bucket permissions).
- A segmented application architecture provides effective and secure separation between components or tenants, with segmentation, containerization, or cloud security groups (ACLs).
- Sending security directives to clients, e.g., Security Headers.
- An automated process to verify the effectiveness of the configurations and settings in all environments.

[Source: OWASP TOP 10 Security Misconfiguration](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

## Cheatsheets
[Security Misconfiguration Cheatcheats](https://cheatsheetseries.owasp.org/IndexTopTen.html#a052021-security-misconfiguration)

## Cards
### Data-validation-&-encoding
- [Data-validation-&-encoding 2](/data-validation-&-encoding/VE2)
- [Data-validation-&-encoding 3](/data-validation-&-encoding/VE3)
- [Data-validation-&-encoding 4](/data-validation-&-encoding/VE4)
- [Data-validation-&-encoding 5](/data-validation-&-encoding/VE5)
- [Data-validation-&-encoding 6](/data-validation-&-encoding/VE6)
- [Data-validation-&-encoding 7](/data-validation-&-encoding/VE7)
- [Data-validation-&-encoding 8](/data-validation-&-encoding/VE8)
- [Data-validation-&-encoding 9](/data-validation-&-encoding/VE9)
- [Data-validation-&-encoding 10](/data-validation-&-encoding/VEX)
- [Data-validation-&-encoding J](/data-validation-&-encoding/VEJ)
- [Data-validation-&-encoding Q](/data-validation-&-encoding/VEQ)
- [Data-validation-&-encoding K](/data-validation-&-encoding/VEK)

### Authentication
- [Authentication 2](/authentication/AT2)
- [Authentication 3](/authentication/AT3)
- [Authentication 4](/authentication/AT4)
- [Authentication 5](/authentication/AT5)
- [Authentication 8](/authentication/AT8)
- [Authentication 9](/authentication/AT9)
- [Authentication 10](/authentication/ATX)
- [Authentication J](/authentication/ATJ)
- [Authentication Q](/authentication/ATQ)

### Session-management
- [Session-management 2](/session-management/SM2)
- [Session-management 3](/session-management/SM3)
- [Session-management 4](/session-management/SM4)
- [Session-management 5](/session-management/SM5)
- [Session-management 6](/session-management/SM6)
- [Session-management 7](/session-management/SM7)
- [Session-management 8](/session-management/SM8)
- [Session-management 9](/session-management/SM9)
- [Session-management 10](/session-management/SMX)
- [Session-management J](/session-management/SMJ)
- [Session-management Q](/session-management/SMQ)
- [Session-management K](/session-management/SMK)

### Authorization
- [Authorization 3](/authorization/AZ3)
- [Authorization 4](/authorization/AZ4)
- [Authorization 8](/authorization/AZ8)
- [Authorization 9](/authorization/AZ9)
- [Authorization J](/authorization/AZJ)

### Cornucopia
- [Cornucopia 2](/cornucopia/C2)
- [Cornucopia 3](/cornucopia/C3)
- [Cornucopia 6](/cornucopia/C6)
- [Cornucopia 8](/cornucopia/C8)
- [Cornucopia 9](/cornucopia/C9)
- [Cornucopia J](/cornucopia/CJ)
- [Cornucopia K](/cornucopia/CK)