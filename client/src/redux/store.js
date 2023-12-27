import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Esta constante nos sirve para conectar nuestra App con la extensión Redux Devtools del navegador.

const store = createStore (
    reducer,
    composeEnhancer( applyMiddleware(thunkMiddleware) ) //Esta línea sirve para que podamos hacer peticiones a una API/Servidor.
); 

export default store;