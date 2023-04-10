const {Router} = require ("express");
const { login } = require ("../controllers/users")
const routes = Router();

routes.get("/login", login)

module.exports= routes;