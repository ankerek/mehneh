import { productsSagas } from './products';


export default function* sagas() {
  yield [
    ...productsSagas,
  ];
}