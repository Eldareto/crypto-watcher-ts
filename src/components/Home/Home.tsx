import { FC, ReactElement } from 'react';

/* local */
import { homeTitle } from './Home.type';

const Home: FC = (): ReactElement => <h1> {homeTitle.homeTitle} </h1>;

export default Home;
