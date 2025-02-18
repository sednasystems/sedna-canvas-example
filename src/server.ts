import bodyParser from 'body-parser';
import express, { Request } from 'express';

import exampleApp from './controllers/example-app';
import { CanvasRequestBody, CanvasResponseBody } from './types';

const app = express();
app.use(bodyParser.json({ type: 'application/json' }));
const port = process.env.PORT || 4444;

type Controller = (req: CanvasRequestBody) => Promise<CanvasResponseBody> | CanvasResponseBody;

/**
 * Decides which controller handles the request.
 * Controllers are simply functions (see Controller type)
 */
const getController = (req: Request): Controller => {
  /**
   * You could return different controllers here depending on e.g.
   * - req.body.appId
   * - req.body.company.id
   * - req.body.context.display
   */
  return exampleApp;
};

app.post('/', async (req, res) => {
  try {
    const { body } = req;
    console.log(
      `REQUEST appId=${body.appId} user=${body.user?.username} company=${body.company?.identifier} display=${body.context?.display}`,
    );
    const controller = getController(req);
    return res.json(await controller(req.body));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', status: 500 });
  }
});

app.listen(port, () => {
  console.info(`[INFO] Server running on port ${port}`);
});
