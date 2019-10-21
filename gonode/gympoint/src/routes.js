import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({
    Message: 'Hello RocketSeat Debugg',
  });
});

export default routes;
