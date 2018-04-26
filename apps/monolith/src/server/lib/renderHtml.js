export default ({ markup, styles, assets }) =>
  // prettier-ignore
  `<!doctype html>
    <html lang="">
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet='utf-8' />
      <title>Welcome to Razzle</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${
        assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ""
      }
      ${styles}
    </head>
    <body>
      <div id="root">${markup}</div>
      <script src="${assets.client.js}" defer crossorigin></script>
    </body>
  </html>`
