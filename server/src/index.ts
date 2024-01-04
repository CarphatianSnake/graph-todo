import express, { Express } from 'express';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';
import cors from 'cors';
import { rootValue } from './rootValue';
import { schema } from './schema';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/', cors(), graphqlHTTP({
  schema,
  rootValue,
  graphiql: !!process.env.NODE_ENV
}))

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
})
