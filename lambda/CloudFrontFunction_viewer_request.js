// https://github.com/aws-samples/amazon-cloudfront-functions
// Cloud front function: fix-url
function handler(event) {
  // NOTE: This function is for a viewer request event trigger.
  var request = event.request;
  var uri = request.uri;

  // Check whether the URI is missing a file name.
  if (uri.endsWith("/")) {
    request.uri += "index.html";
  }

  // Check whether the URI is missing a file extension.
  else if (!uri.includes(".")) {
    request.uri += "/index.html";
  }

  return request;
}

/*
// https://github.com/aws-samples/amazon-cloudfront-functions
function handler(event) {
  // NOTE: This example function is for a viewer request event trigger.
  var request = event.request;
  var uri = request.uri;
  // var headers = request.headers;
  // console.log("uri: "+uri);
  // console.log(headers);

  // Check whether the URI is missing a file name.
  if (uri.endsWith("/")) {
    request.uri += "index.html";
  }
  // Check whether the URI is missing a file extension.
  else if (!uri.includes(".")) {
    request.uri += "/index.html";
  }

  // Choose viewer request for event trigger when you associate this function with a distribution.
  // var response = {
  //     statusCode: 200,
  //     statusDescription: 'OK',
  //     headers: {
  //         'cloudfront-functions': { value: 'generated-by-CloudFront-Functions' }
  //     }
  // };

  // var response = {
  //             statusCode: 302,
  //             statusDescription: 'Found',
  //             headers:
  //                 { "location": { "value": newurl } }
  //             }
  // return response;

  return request;
}
*/
