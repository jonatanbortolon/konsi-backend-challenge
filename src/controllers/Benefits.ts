import { Router, Request, Response } from "express";
import apiInstance from "../api";
import IBenefitResponse from "../types/benefitResponse";
import BaseController from "./BaseController";
 
class BenefitsController implements BaseController {
  public path = "/benefits";
  public router = Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.post("/", this.getBenefits);
  }
 
  getBenefits = async (request: Request, response: Response) => {
    const payload = {
      document: request.body.document,
      login: request.body.login,
      password: request.body.password,
    };
    try {
      const loginResponse = await apiInstance.post("/login", {
        login: payload.login,
        senha: payload.password
      });

      if (loginResponse.status !== 200) {
        return response.status(500).json({
          success: false,
          error: "Failed to login",
          payload: null
        })
      }
      
      const token = loginResponse.headers["authorization"].split(" ")[1];

      if (!token) {
        return response.status(500).json({
          success: false,
          error: "Failed to obtain token",
          payload: null
        })
      }

      const benefitsResponse = await apiInstance.get<IBenefitResponse>(`/offline/listagem/${payload.document}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (benefitsResponse.status !== 200) {
        return response.status(500).json({
          success: false,
          error: "Failed to get benefits",
          payload: null
        })
      }

      return response.status(200).json({
        success: true,
        error: null,
        payload: benefitsResponse.data.beneficios.map((benefit) => {
          return benefit.nb;
        })
      }) 
    } catch (error) {
      return response.status(500).json({
        success: false,
        error: error,
        payload: null
      })
    }
  }
}
 
export default BenefitsController;