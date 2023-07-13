import { server } from './server/Server';

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server ir running on port ${process.env.PORT || 5000}`);
});
