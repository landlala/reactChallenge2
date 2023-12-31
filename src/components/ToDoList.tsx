import { useRecoilValue, useRecoilState } from "recoil";
import { toDoState, toDoSelector, categoryState, Categories } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };
    console.log(toDos);
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <select value = {category} onInput = {onInput}>
                <option value = {Categories.TO_DO}>To Do</option>
                <option value = {Categories.DOING}>Doing</option>
                <option value = {Categories.DONE}>Done</option>
            </select>
            <CreateToDo />
            <CreateCategory />
            {toDos?.map(toDo => <ToDo key = {toDo.id} {...toDo} />)}
        </div>
    );
}

export default ToDoList;