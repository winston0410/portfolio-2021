// NOTE Entrypoint for whole application
import createServer from './app';

const PORT = process.env.PORT || 3001;
const server = createServer();

server.listen(+PORT, "0.0.0.0", (err, host) => {
  if (err) throw err;
  console.log(`server listening on ${host}`);
});
