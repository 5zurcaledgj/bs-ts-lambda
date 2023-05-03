import { APIGatewayProxyHandler } from "aws-lambda";
import { S3 } from "aws-sdk";

const s3 = new S3();

export const handler: APIGatewayProxyHandler = async (event) => {
  const bucket = process.env.BUCKET_NAME || "";

  try {
    const list = await s3.listObjects({ Bucket: bucket }).promise();
    return {
      statusCode: 200,
      body: 'testing actions',
    };
  } catch (error) {
    const message = (error as Error).message;
    return {
      statusCode: 500,
      body: JSON.stringify({ message }),
    };
  }
};
