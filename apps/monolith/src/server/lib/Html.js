/* eslint-disable react/no-danger */
import React from "react"

const Html = ({ markup, styles, assets, client: { cache } }) => (
  <html lang="en">
    <head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>CommuniTii</title>
      <link
        rel="stylesheet"
        href={assets.client.css ? assets.client.css : ""}
      />
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: markup }} />
      <script src={assets.client.js} defer crossOrigin="true" />
      <script
        charSet="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(cache.extract())};`
        }}
      />
    </body>
  </html>
)

export default Html
