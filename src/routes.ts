import { Router } from "express";
import { RoomController } from "./controllers/RoomController";
import { SubjectControlller } from "./controllers/SubjectControlller";

const routes = Router();


routes.post('/subject', new SubjectControlller().create)
routes.post('/room', new RoomController().create)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)

export default routes