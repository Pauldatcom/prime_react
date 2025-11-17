import { rootRoute } from './routes/__root';
import { indexRoute } from './routes/index';
import { primesRoute } from './routes/primes';

const routeTree = rootRoute.addChildren([indexRoute, primesRoute]);

export { routeTree };
