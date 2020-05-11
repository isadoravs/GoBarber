import { Router } from 'express';
import AppointmentsController from '../controllers/AppointmentsController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointment = await appointmentsRepository.find();
//   return response.json(appointment);
// });

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
