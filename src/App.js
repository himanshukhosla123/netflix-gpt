import Body from './components/Body';
import {app} from './utils/firebase';
import { Provider } from 'react-redux';
import { appStore } from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <Body/>
    </Provider>
  );
}

export default App;
