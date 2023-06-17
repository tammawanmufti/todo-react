import { Box } from '@mui/material'

interface Props {
    todo: string;
}

const TodoItem = (props: Props) => {
    return (
        <Box sx={{
            mb: 1,
            textAlign: 'start',
            width: '100%',
            borderColor: 'green',
            borderWidth: 1,
            borderStyle: 'solid',
            padding: 2,
        }}>
            {props.todo}
        </Box>
    )
}

export default TodoItem