import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const {register, setValue, handleSubmit} = useForm<IForm>();
    const handleValid = ({toDo} : IForm) => {
        setToDos(oldToDos => [{text: toDo, id: Date.now(), category}, ...oldToDos]);
        setValue("toDo", "");
    };
    return (
        <form onSubmit = {handleSubmit(handleValid)}>
            <input
                {...register("toDo", {
                    required: "please write a todo"
                })}
                placeholder = "write a todo"
            />
            <button>add</button>
        </form>
    );
}

export default CreateToDo;