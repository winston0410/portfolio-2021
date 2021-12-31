// NOTE Entrypoint for whole application
import createServer from './app';

const PORT = process.env.PORT || 3001;
const server = createServer();

if(!process.env.PLAYWRIGHT_CHROMIUM_PATH){
    throw "You need to set path for bundled chromium for playwright explicity"
}

server.listen(+PORT, "0.0.0.0", (err, host) => {
  if (err) throw err;
  console.log(`server listening on ${host}`);
});
