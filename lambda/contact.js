const SES = require("aws-sdk/clients/ses");

async function sendEmail(
  region,
  fromEmail,
  fromName,
  toAddresses,
  subject,
  bodyAsHTML,
) {
  const charset = "UTF-8";

  let vToAddresses = [];
  if (typeof toAddresses === "object") {
    vToAddresses = toAddresses;
  } else {
    vToAddresses = toAddresses.split(";");
  }

  const sesClient = new SES({ region });

  const params = {
    Source: fromName ? `${fromName} <${fromEmail}>` : fromEmail,
    Destination: {
      ToAddresses: vToAddresses,
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: charset,
      },
      Body: {
        Html: {
          Data: bodyAsHTML,
          Charset: charset,
        },
      },
    },
  };

  return sesClient.sendEmail(params).promise();
}

function getEmailBody(subject, name, phone, email, message) {
  const year = new Date().getFullYear();

  const data = [];
  data.push(["Имя", name]);

  if (email) {
    data.push([
      "Эл. почта",
      `<a href="mailto:${email}" style="text-decoration: underline;">${email}</a>`,
    ]);
  }

  if (phone) {
    data.push(["Телефон", phone]);
  }

  let rows = "";
  for (let i = 0; i < data.length; i += 1) {
    rows += `<tr>
        <td class="row-line left text-gray" align="left">
            ${data[i][0]}
        </td>
        <td class="row-line right text-bold" align="right">
            ${data[i][1]}
        </td>
    </tr>`;
  }

  return `<!DOCTYPE HTML PUBLIC>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="x-apple-disable-message-reformatting">
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>${subject}</title>
    <style type="text/css">
        body {
            background-color: #f2f2f2;
            color: #222222;
            font-family: Helvetica, Arial, sans-serif !important;
            margin: 0;
        }

        table {
            line-height: inherit;
            font-size: inherit;
        }

        .card-box {
            box-shadow: 0 1px 5px 0 #cccccc;
            -webkit-box-shadow: 0 1px 5px 0 #cccccc;
            -moz-box-shadow: 0 1px 5px 0 #cccccc;
        }

        .card-row {
            font-family: Helvetica, Arial, sans-serif !important;
            font-size: 1rem;
            line-height: 1.5rem;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 20px;
        }

        a {
            color: #6495ed;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .row-line {
            border-top: 1px solid #E0E0E0;
            padding: 5px 0;
            vertical-align: top;
        }

        .row-line.left {
            padding-right: 5px;
        }

        .text-gray {
            color: #656565 !important;
        }

        .text-green {
            color: #37A000 !important;
        }

        .text-bold {
            font-weight: 700;
        }

        .text-normal {
            font-weight: 500;
        }

        .simple-link {
          text-decoration: none;
          font-weight: 500;
          color: #6495ed !important;
        }

        .sub-title {
            margin-top: 0;
            margin-bottom: 0;
            font-weight: 700;
            font-size: 1.125rem;
            color: #222;
        }

        @media (min-width: 600px) {
            .card-box.first {
                margin-top: 30px;
            }

            .card-row {
                padding-left: 30px !important;
                padding-right: 30px !important;
            }
        }
    </style>
</head>

<body>
    <table bgcolor="#f2f2f2" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
            <tr>
                <td>
                    <div style="max-width: 600px; margin: 0 auto; font-size: 16px; line-height: 24px;">
                        <table border="0" cellpadding="0" cellspacing="0" class="card-box first" width="100%"
                            style="background-color: white; padding-top: 10px; padding-bottom: 30px;">
                            <tbody>
                                <tr>
                                    <td class="card-row" align="center" style="font-size: 20px;">
                                        ${subject}
                                    </td>
                                </tr>

                                <tr>
                                    <td class="card-row">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="left" colspan="2" style="padding-bottom: 10px;">
                                                    <h4 class="sub-title">Контактные данные</h4>
                                                </td>
                                            </tr>
                                            ${rows}
                                            <tr>
                                                <td colspan="2" class="row-line" style="line-height: 0; padding: 0;">
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="card-row">
                                        <b>Сообщение</b><br>${message}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="center" width="100%" style="color: #656565; font-size: 12px; line-height: 24px; padding-bottom: 30px; padding-top: 30px;">
                                        <div>&copy; ${year} yunotex.com</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>
`;
}

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const { name, phone, email, message } = body;

  const subject = `Сообщение из формы Свяжитесь с нами - yunotex.com`;
  const bodyAsHTML = getEmailBody(subject, name, phone, email, message);

  const res = await sendEmail(
    "eu-west-1",
    "no-reply@yunotex.com",
    "yunotex.com",
    ["nikolaevmikhail@gmail.com"], // TODO replace to real email
    subject,
    bodyAsHTML,
  );

  const response = {
    statusCode: 200,
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({
      success: true,
    }),
  };

  return response;
};
