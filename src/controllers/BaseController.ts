import { Router } from "express";

interface BaseController {
  path:string;
  router:Router;
  intializeRoutes: () => void
}

export default BaseController