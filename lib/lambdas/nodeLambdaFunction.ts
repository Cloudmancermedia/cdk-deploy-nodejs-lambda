import { v4 as uuidv4 } from 'uuid';

exports.handler = async function(event: any) {
  console.log("request:", JSON.stringify(event));
  console.log("Generating uuid: ", uuidv4());
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "Hello, CDK!"
  };
};