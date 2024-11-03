import {ModuleTree} from 'vuex';
import {EventsModule} from './events';

const Modules: ModuleTree<any> = {
    ...EventsModule,
};

export {Modules};
