import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import SearchPage from '@/pages/searchPage';
import store from './redux/store';

import '@/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <SearchPage />
      <ToastContainer />
    </Provider>
  );
}

export default App;
