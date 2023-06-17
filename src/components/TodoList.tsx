import { Stack } from "@mui/material"
import TodoItem from "./TodoItem"

interface Props {
    todoData: string[];
}

const TodoList = (props: Props) => {
    return (
        <Stack>
            {props.todoData.map((data, index) => {
                return <TodoItem todo={data} key={index} />
            })}
        </Stack>
    )
}

export default TodoList