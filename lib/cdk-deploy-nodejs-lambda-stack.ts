import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, LayerVersion, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export class CdkDeployNodejsLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const layer = new LayerVersion(
      this,
      "Layer",
      {
        code: Code.fromAsset("./lib/layers"),
        compatibleRuntimes: [ Runtime.NODEJS_LATEST ],
        layerVersionName: "NodeJsLayer"
      }
    )

    const nodejsFunction = new NodejsFunction(
      this,
      "NodeJsFunction",
      {
        entry: "lib/lambdas/nodeLambdaFunction.ts",
        handler: "handler",
        memorySize: 128,
        runtime: Runtime.NODEJS_LATEST,
        layers: [
          layer
        ],
        bundling: {
          externalModules: [
            'uuid'
          ]
        }
      }
    )
  }
}
