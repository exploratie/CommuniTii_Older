import HomePage from "./home"
import TestPage from "./test"
import NotFoundPage from "./notFound"

export default [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/test",
    component: TestPage
  },
  {
    path: "*",
    component: NotFoundPage
  }
]
