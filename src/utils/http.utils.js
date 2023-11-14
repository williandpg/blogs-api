const httpMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  DELETED: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUE: 422,
};
  
const httpMapStatus = (status) => httpMap[status] || 500;
  
module.exports = httpMapStatus;