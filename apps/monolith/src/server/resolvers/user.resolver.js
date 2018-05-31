import { prepareQuery as prep } from "server/lib/utils"

export default {
  Query: {
    // fetch the profile of currenly athenticated user
    async me(_, args, { user }, { Users }) {
      // make sure user is logged in
      if (!user) {
        throw new Error("You are not authenticated!")
      }

      // user is authenticated
      return await prep(Users.findOne(ObjectId(user.id)))
    }
  },
  Mutation: {}
}
