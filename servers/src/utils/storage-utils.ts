import * as AWS from "@aws-sdk/client-s3";
import { configs } from "../configs";

const s3 = new AWS.S3({
  region: "APAC",
  endpoint:
    "https://6be3f047dd5127f12c24c19a56397f50.r2.cloudflarestorage.com/bucket-01",
  bucketEndpoint: true,
  credentials: {
    accessKeyId: configs.accessKeyId,
    secretAccessKey: configs.secretAccessKey,
  },
});

export async function sentFile() {
  // s3.putObject()
}
