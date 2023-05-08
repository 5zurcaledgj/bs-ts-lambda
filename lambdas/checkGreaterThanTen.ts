import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: any) => {
  const number = parseInt(event.queryStringParameters.result, 10);
  const isGreaterThanTen = number > 10;

  return {
    statusCode: 200,
    body: JSON.stringify({ isGreaterThanTen }),
  };
};
