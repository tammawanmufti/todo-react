import { Container } from "@mui/material"
import Todo from "./pages/Todo"

const App = () => {
  return (
    <Container sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Todo />
    </Container>
  )
}

export default App