import rateLimiter from "express-rate-limit";
import config from "../utils/config/config";
import { errorResponse } from "../utils/helpers/responseTraits";

const apiLimiter = rateLimiter({
    windowMs: 1 * 60 * 1000,
    max:parseInt(config.LIMIT_REQUEST_PER_MINUTE!),
    statusCode: 429,
    message: () => {
      return errorResponse({  
        data:null,
        message: "You are performing too many request on this route,please try again later",
        statusCode: 429
    });
    },
  });

  export default apiLimiter;