import { useForm } from "react-hook-form";

interface ICategory {
    category: string;
}

function CreateCategory() {
    const {register, setValue, handleSubmit} = useForm<ICategory>();
    const handleValid = (category: ICategory) => {
        setValue("category", "");
    }

    return (
        <form onSubmit = {handleSubmit(handleValid)}>
            <input
                {...register("category", {
                    required: "category"
                })}
                placeholder = "category"
            />
            <button>add category</button>
        </form>
    )
}

export default CreateCategory;