import { ToastContainer } from 'react-toastify';
import SearchPage from '@/pages/searchPage';

import '@/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <SearchPage />
      <ToastContainer />
    </div>
  );
}

export default App;
