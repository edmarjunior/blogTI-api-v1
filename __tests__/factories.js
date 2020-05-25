import faker from 'faker';
import { factory } from 'factory-girl';

import Exemplo from '../src/app/models/Exemplo';

factory.define('Exemplo', Exemplo, {
	nome: faker.name.findName(),
});

export default factory;
