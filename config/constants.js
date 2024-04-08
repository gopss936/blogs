const Constants = {
    succsessResponse: {
      CREATED_SUCCESSFULLY:"Register Succsessfully",
      LOGIN_SUCCESSFULLY:"Login Successfully",
      POST_DELETE_SUCCESS:'Post deleted successfully',
      POST_UPDATE_SUCCESS:'Post updated successfully',

    
    },
    failResponse: {
      USER_EXIST:'user already exists.',

      INVALID_ID:"Invalid ",
      INVALID:"Invalid Id",
      FILE_NOT_FOUND:"File Not Found",
      NOT_FOUND:"NotFound",
      TITLE_EXIST:'Title is already there. Please enter an alternative name',
      POST_NOT_FOUND:'Post not found',
    },
     errorResponse:{
     
      INVALID_TOKEN:"Invalid or Expired Token",
      DO_NOT_MATCH:"Password and ConfirmPassword doesn't match",
      TOKEN_REQUIRED:"No token provided.",
      IMG_FILE_REQ:'Image file is required',
      UPDATE_UNAUTHORIZE:'You are not authorized to update this post',
      DELETE_UNAUTHORIZE:'You are not authorized to delete this post',
      INVALID_CRED:'Invalid credentials',
   },
    
    USER_NOT_FOUND:'User not found.',

   
    Swagger:{
      TITTLE:"Blogs Management",
      DESCRIPTION:"Blogs Api Documentation",
      CONTACTNAME:"Shashwot",
      SERVERS:["http://localhost:3000/"],
      TYPE:"apiKey" ,
      BEARERAUTH_NAME:"Authorization",
      IN:"header",
      APIS:["./swagger/*.js"]
    },
    IMAGE_PATH:"../upload/images",
    

  };
  module.exports = Constants;
