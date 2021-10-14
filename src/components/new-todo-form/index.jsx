import "./styles.css";
import {useForm} from 'react-hook-form';
import {Input} from '../input-field';

export const NewTodoForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="text"
                name="title"
                label="Todo (e.g do laundry)"
                errors={errors}
                register={register}
                validationSchema={
                    {
                        required: "Todo text is required",
                        minLength: {
                            value:3,
                            message: "for your own sake, please enter at least 3 characters"
                        }
                    }
                }
                required
            />

                <Input
                type="date"
                name="date"
                label="Date"
                errors={errors}
                register={register}
                validationSchema={
                    {
                        required: "Date is required",
                    }
                }
                required
            />

            <input type="submit"/>
        </form>
    )
}