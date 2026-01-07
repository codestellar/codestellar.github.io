## how to autoscale
1. Get nodepools: (Resource Group: <resource_group_name>, Cluster: <cluster_name>
)
````
az aks nodepool list --resource-group <resource_group_name> --cluster-name <cluster_name> -o table
````

2. Enable Autoscale
````
az aks nodepool update \
  --resource-group <resource_group_name> \
  --cluster-name <cluster_name> \
  --name <node_pool_name> \
  --enable-cluster-autoscaler \
  --min-count 2 \
  --max-count 6

````
3. Verify Autoscaling is enabled
````
az aks nodepool show \
  --resource-group <resource_group_name> \
  --cluster-name <cluster_name> \
  --name <node_pool_name> \
  --query "enableAutoScaling"

````
4. Enable Horizontal pod scaling (HPA: horizonal pod autoscaler)
````
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

````
5. Increase Metrics Server Memory (Run if getting error in Step 4)
````
kubectl patch deployment metrics-server -n kube-system \
  --type='json' \
  -p='[
    {"op": "replace", "path": "/spec/template/spec/containers/0/resources/limits/memory", "value":"256Mi"},
    {"op": "replace", "path": "/spec/template/spec/containers/0/resources/requests/memory", "value":"200Mi"}
  ]'


````
6. Rollout restart metrics server
````
kubectl rollout status deployment metrics-server -n kube-system

````
7. Ensure that metrics server is running
````
kubectl get pods -n kube-system -l k8s-app=metrics-server

````
8. Verify Metrics Server memory
````
kubectl get deployment metrics-server -n kube-system -o jsonpath="{.spec.template.spec.containers[0].resources}"

````
9. Create HPA for your deployment
````
kubectl autoscale deployment <application_deployment_name> \
  --cpu-percent=50 \
  --min=2 \
  --max=10
````
10. Check and verify hpa
````
kubectl delete hpa <hpa-name>
````


How to install Cert Manager?
````
helm repo add jetstack https://charts.jetstack.io
helm repo update

### Install cert-manager in its own namespace

helm install cert-manager jetstack/cert-manager \
  --namespace default \
  --version v1.15.1
````