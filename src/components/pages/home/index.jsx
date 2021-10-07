import "./styles.css";
import {Todo} from "../../todo";

export const HomePage = () => {
    return (
        <div>
            <Todo 
                text="Walk the dog" date="07/10/2021" color="blue"
            >
            </Todo>
            <Todo 
                text="GAME EPICLY :)" date="07/10/2021" color="blue"
            >
            </Todo>
            <Todo 
                text="eat banan - a" date="07/10/2021" color="blue"
            >
            </Todo>
        </div>
    )
}