# AWS Articles should be coming here

1. How to check what all Database instances are publically accessible?
````
aws rds describe-db-instances --query "DBInstances[*].{DBInstance:DBInstanceIdentifier,PubliclyAccessible:PubliclyAccessible}" --region <region-name>
````