// not used
// function handler(event) {
//   var response = event.response;
//   var headers = response.headers;
//   var request = event.request;

//   if (request.uri.startsWith("/static/")) {
//     headers["cache-control"] = { value: "public, max-age=31536000, immutable" };
//   }

//   // Return response to viewers
//   return response;
// }

/*
function handler(event) {
  var response = event.response;
  var headers = response.headers;
  var request = event.request;

  // Set the cache-control header
  headers["cache-control"] = { value: "public, max-age=63072000" };

  if (request.uri.startsWith("/static/")) {
    headers["cache-control"] = [
      {
        // key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ];
    // } else {
    //   headers["cache-control"] = [
    //     {
    //       key: "Cache-Control",
    //       value: "public, max-age=0, must-revalidate",
    //     },
    //   ];
  }

  // headers["vary"] = [
  //   {
  //     key: "Vary",
  //     value: "Accept-Encoding",
  //   },
  // ];

  // Return response to viewers
  return response;
}
*/
