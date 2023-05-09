import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: any, context: any) => {
  console.log(context, event);
  const number = parseInt(event.result, 10);
  const isGreaterThanTen = number > 10;

  return {
    statusCode: 200,
    body: JSON.stringify({ result: 1 }),
  };
};
