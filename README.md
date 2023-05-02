# Typescript Function Playground

This serves as a test function for the lambda. This uses SAM to deploy the lambda function


## To build
Run the following
```
npm run build
```


## To build the package
```
sam package \
  --template-file template.yaml \
  --output-template-file packaged.yaml \
  --s3-bucket bs-ts
```
## To deploy 
```
sam deploy --template-file <project_path>/packaged.yaml --stack-name typescript-lambda-stack --capabilities CAPABILITY_IAM
```
Go to AWS console, you should be able to see the created function and test it. 

## To destroy the stack
```
aws cloudformation delete-stack --stack-name typescript-lambda-stack
```

