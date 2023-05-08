#!/bin/bash

FUNCTION_NAME=$1
ZIP_FILE=$2
FILE_NAME=$3

# Check if the Lambda function exists
aws lambda get-function --function-name $FUNCTION_NAME > /dev/null 2>&1

if [ $? -eq 0 ]
then
  echo "Updating Lambda function $FUNCTION_NAME"
  aws lambda update-function-code --function-name $FUNCTION_NAME --zip-file $ZIP_FILE --publish
else
  echo "Creating Lambda function $FUNCTION_NAME"
  aws lambda create-function --function-name $FUNCTION_NAME --runtime nodejs14.x --handler "$FILE_NAME.handler" --role arn:aws:iam::728900521350:role/typescript-lambda-stack-TypeScriptFunctionRole-5INNDGUX9XXW --zip-file $ZIP_FILE --publish
fi