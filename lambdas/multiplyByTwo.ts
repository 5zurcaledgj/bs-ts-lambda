import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: any, context: any) => {
  console.log(context, event);
  // const number = parseInt(event.queryStringParameters.inputNumber, 10);
  // const result = number * 2;

  return {
    statusCode: 200,
    body: JSON.stringify({ result: 2 }),
  };
};
