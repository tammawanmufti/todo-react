/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Stack, TextField, Typography } from "@mui/material"
import TodoList from "../components/TodoList"
import { useState } from "react"

const Todo = () => {
    const [input, setInput] = useState('')
    const [todoData, setTodoData] = useState<string[]>([]);

    const handleTextField = (event: any) => {
        setInput(event.target.value)
    }

    const handleSubmit = () => {
        if (input) {
            todoData.push(input)
            setTodoData(todoData);
            setInput('');
        }
    }

    return (
        <Stack sx={{
            textAlign: 'center'
        }}>
            <Typography sx={{
                py: 2,
            }}>Todo List</Typography>
            <Stack direction='row' pb={2}>
                <TextField
                    value={input}
                    sx={{ paddingRight: 2 }}
                    onChange={handleTextField}
                />
                <Button
                    variant="contained"
                    onClick={handleSubmit}>Submit
                </Button>
            </Stack>
            <TodoList todoData={todoData} />
        </Stack>
    )
}

export default Todo