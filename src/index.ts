import "dotenv/config";
import App from "./app";
import BenefitsController from "./controllers/Benefits";

const app = new App([
  new BenefitsController()
], Number(process.env.PORT) ?? 3000, {
  baseUrl: process.env.BASE_URL ?? undefined
});

app.listen();