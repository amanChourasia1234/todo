import { useEffect, useState } from 'react';
import { createTodo, readTodos } from './functions';
import Preloader from './components/Preloader';
import Header from './components/Header';
function App() {
  const [todo, setTodo] = useState({ title: '', content: '' });
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await readTodos();
      setTodos(result);
    };
    fetchData();
  }, []);

  const onSubmitHandler = async e => {
    e.preventDefault();
    const result = await createTodo(todo);
    console.log(result);
  };

  return (
    <div className="container">
      <Header></Header>
      <div className="row top-20">
        {/* <pre>{JSON.stringify(todo)}</pre> */}
        <form className="col s12 " onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">title</i>
              <input
                id="icon_prefix"
                type="text"
                className="validate"
                onChange={e => setTodo({ ...todo, title: e.target.value })}
              />
              <label htmlFor="icon_prefix">Title</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input
                id="icon_telephone"
                type="tel"
                className="validate"
                onChange={e => setTodo({ ...todo, content: e.target.value })}
              />
              <label htmlFor="icon_telephone">Content</label>
            </div>
          </div>
          <div className="row right-align">
            <button className="waves-effect waves-light btn">Submit</button>
          </div>
        </form>
        {!todos ? (
          <Preloader />
        ) : todos.length > 0 ? (
          <ul className="collection">
            {todos.map((todo, index) => (
              <li key={todo.id} className="collection-item">
                <div>
                  <h5>{todo.title}</h5>
                  <p>
                    {todo.content}

                    <a href="#" className="secondary-content">
                      <i className="material-icons">delete</i>
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <h5>Empty</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
