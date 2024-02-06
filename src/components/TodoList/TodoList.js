import '../../styles/TodoList/TodoList.css'
import TodoItem from './TodoItem';

function ToDolist() {

    
  return (
    <div className="main-container">
      <TodoItem iconName={"FaClock"} itemName={'Wake up'}/>
      <TodoItem iconName={"FaHamburger"} itemName={'Eat breakfast'}/>
      <TodoItem iconName={"FaShower"} itemName={'Take a shower'}/>
    </div>
  );
}
export default ToDolist;
