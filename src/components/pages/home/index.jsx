import "./styles.css";
import {Todo} from "../../todo";

export const HomePage = () => {
    const todos = [
        {text: "walk the dog", date: "07,10,2021", color: "blue", isComplete: false},
        {text: "eat some food", date: "07,10,2021", color: "blue", isComplete: false},
        {text: "build car", date: "07,10,2021", color: "blue", isComplete: false}
    ];

    return (
        <div className="todos-container">
            {todos.map ((todo) => <Todo text={todo.text} date={todo.date} color={todo.color} isComplete={todo.isComplete}/>)}
        </div>
    )
}