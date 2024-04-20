exports.handler = async function(event: any) {
  console.log("request:", JSON.stringify(event));
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "Hello, CDK!"
  };
};