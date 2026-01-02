import { CanvasRequest, CanvasResponse } from '@sednasystems/canvas-schema';
import bodyParser from 'body-parser';
import express, { Request } from 'express';

import exampleApp from './controllers/example-app';
import exampleScanCardApp from './controllers/example-app-scan-card';

const app = express();
app.use(bodyParser.json({ type: 'application/json' }));
const port = process.env.PORT || 4444;

type Controller = (req: CanvasRequest) => Promise<CanvasResponse> | CanvasResponse;

/**
 * Decides which controller handles the request.
 * Controllers are simply functions (see Controller type)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getController = (req: Request): Controller => {
  /**
   * You could return different controllers here depending on e.g.
   * - req.body.appId
   * - req.body.company.id
   * - req.body.context.display

   * To make a sample Scan Card app response, uncomment the line "return exampleScanCardApp"
   * and comment out the line "return exampleApp"
    */
  //return exampleScanCardApp;
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
