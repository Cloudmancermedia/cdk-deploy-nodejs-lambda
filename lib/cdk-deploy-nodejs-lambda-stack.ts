import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export class CdkDeployNodejsLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const nodejsFunction = new NodejsFunction(
      this,
      "NodeJsFunction",
      {
        entry: "lib/lambdas/nodeLambdaFunction.ts",
        handler: "handler",
        memorySize: 128,
        runtime: Runtime.NODEJS_LATEST
      }
    )
  }
}
