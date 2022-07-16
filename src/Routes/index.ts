import watch from "./Watch";
import brand from "./Brand";
import model from "./Model";

import { Router } from "express";

let rootRouter = Router();

rootRouter.use("/api/watch", watch);
rootRouter.use("/api/brand", brand);
rootRouter.use("/api/model", model);

export default rootRouter;
