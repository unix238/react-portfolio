import {Index} from '../pages/Index';
import { Resume } from '../pages/Resume';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';
import {Navigate} from 'react-router-dom';


export const AllRoutes = [
    {path: '/home', component: <Index />, exact: true},
    {path: '/resume', component: <Resume />, exact: true},
    {path: '/projects', component: <Projects />, exact: true},
    {path: '/contact', component: <Contact />, exact: true},
    {path: '/*', component:<Navigate to="/home" />, exact:true},
]