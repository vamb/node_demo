const { SuccessModel } = require('../entity/respEntity')
const { queryAllUser, newUser, simpleNewUser,
  updateUser, simpleUpdateUser, deleteUser } = require("../controller/userController")

const handleUserRoute = async (req, res) =>{
  const { method, path } = req

  if("get" === method?.toLowerCase() && '/api/allUser' === path) {
    const allUser = await queryAllUser()
    return new SuccessModel(allUser, "Great")
  }

  if("post" === method?.toLowerCase() && '/api/newUser' === path) {
    const rest = await newUser(req.restBody)
    return new SuccessModel(rest)
  }

  if("post" === method?.toLowerCase() && '/api/simpleNewUser' === path) {
    const rest = await simpleNewUser(req.restBody)
    return new SuccessModel(rest)
  }

  if("put" === method?.toLowerCase() && '/api/updateUser' === path) {
    const rest = await updateUser(req.restBody)
    return new SuccessModel(rest)
  }

  if("put" === method?.toLowerCase() && '/api/simpleUpdateUser' === path) {
    const rest = await simpleUpdateUser(req.restBody)
    return new SuccessModel(rest)
  }

  if("delete" === method?.toLowerCase() && '/api/deleteUser' === path) {
    const rest = await deleteUser(req.restBody)
    return new SuccessModel(rest)
  }
}

module.exports = handleUserRoute
