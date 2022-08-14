const express=require('express')
const route=express.Router();

const services=require('../services/render')
/**
 * @description Root Route
 * @method GET /
 */
app.get("/",services.homeRoutes)
  /**
 * @description add users
 * @method GET /
 */
  app.get("/add-user", services.add_user)
  
  /**
 * @description update users
 * @method GET /
 */
    app.get("/update-user",services.update_user)
  
  app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  });
  
  module.exports=route;