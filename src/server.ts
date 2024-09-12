import bodyParser from 'body-parser';
import express from 'express';

import controllers from './controllers';
import { AppError, getController, loadConfig } from './utils';

const app = express();
app.use(bodyParser.json({ type: 'application/json' }));
const port = process.env.PORT || 8080;

app.post('/', async (req, res) => {
  try {
    return res.json(await getController(req, await loadConfig(), controllers).getResponse());
  } catch (error) {
    if (error instanceof AppError) {
      console.error(`[ERROR] ${error.message}`);
      return res.status(error.status).json({ error: error.message, status: error.status });
    }
    console.error(error);
    return res.status(500).json({ error: 'Internal server error', status: 500 });
  }
});

app.listen(port, () => {
  console.log(`[INFO] Server is running on http://localhost:${port}`);
});
