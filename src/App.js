import { Provider } from 'react-redux';
import TasksHeader from './TasksHeader';
import TasksList from './TasksList';
import TaskForm from './TaskForm';
import store from './StoreRedux';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <article>
          <TasksHeader />
          <TasksList
          />
          <footer>
            <TaskForm />
          </footer>
        </article>
      </div>
    </Provider>
  );
}

export default App;
