import signale from "signale"

import initServer from "./server"

if (module.hot) {
  module.hot.accept("./server", function() {
    signale.watch("🔁  HMR Reloading `./server`...")
  })
  signale.success("✅  Server-side HMR Enabled!")
}

const port = process.env.PORT || 3000

const start = async () => {
  const app = await initServer()
  app.start(
    {
      port,
      endpoint: "/graphql",
      playground: "/graphql"
    },
    ({ port }) => signale.success(`🌐  Started on port ${port}`)
  )
}

export default start()
