import { withDecoration } from '../InputDecorator';

export default withDecoration('geoweb', 'light')('button');

export const Button = withDecoration('geoweb', 'none')('button');
export const BrowserButton = withDecoration('none', 'none')('button');
