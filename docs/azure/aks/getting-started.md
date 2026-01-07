::: danger What was the problem?
Need a scalable Kubernetes solution on Azure
:::

::: tip What was the solution?
Setting up AKS following this article
:::

# Setting up AKS in Azure

1. Login into azure
````
az login
````
2. Create Resource Group
````
az group create \
  --name <resource_group_name> \
  --location <region_name>
````
3. Create a cluster
````
az aks create \
  --resource-group <resource_group_name>\
  --name <cluster_name> \
  --location <location> \
  --nodepool-name <node_pool_name> \
  --node-count 2 \
  --enable-cluster-autoscaler \
  --min-count 2 \
  --max-count 3 \
  --node-vm-size Standard_D2s_v3 \
  --generate-ssh-keys

````
4. Register Container Service and Container Registry (if not already registered or you got an error in creating a cluster)
````
az provider register --namespace Microsoft.ContainerService
az provider register --namespace Microsoft.ContainerRegistry
````
5. Create an Azure Container Registry
````
az acr create \
  --resource-group <resource_group_name> \
  --name <acr_name> \
  --sku <sku_name e.g. Basic> \
  --admin-enabled true
````
6. Login into ACR
````
az acr login --name <acr_name>
````
7. Build and Tag Docker Image
````
docker build -t <application_name> .
docker tag <application_name>:latest <acr_name>.azurecr.io/<application_name>:latest
````
8. Docker push
````
docker push <acr_name>.azurecr.io/<application_name>:latest
````
9. Login into AKS
````
az aks get-credentials \
  --resource-group <resource_group_name> \
  --name <cluster_name>
````
10. Attach ACR to AKS for pull access
````
az aks update \
  --name <cluster_name> \
  --resource-group <resource_group_name> \
  --attach-acr <acr_name>
````
11.   Install Ingress Manually. 
````
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml
````
12.   Verify Ingress Controller
````
kubectl get pods -n ingress-nginx
````
13.    Get an external IP
````
kubectl get service ingress-nginx-controller -n ingress-nginx
````
14. Add this external IP in your DNS Records as A name record
15. Now you are ready to deploy your application to aks
16. Install Cert Manager:
````
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/latest/download/cert-manager.yaml
````

