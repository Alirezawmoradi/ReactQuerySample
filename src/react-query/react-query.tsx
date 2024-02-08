import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {addTodo, fetchTodos} from "./api/fetch-api.tsx";
import TodoCard from "./components/todo-card.tsx";
import {useState} from "react";

const ReactQuery = () => {
    const queryClient = useQueryClient();

    const [title, seTitle] = useState('');

    const [search, setSearch] = useState('')

    const {data: todos, isLoading} = useQuery({
        queryFn: () => fetchTodos(search),
        queryKey: ["todos", {search}],
        staleTime: Infinity,
        gcTime: 0,
    });

    const {mutateAsync: addTodoMutation} = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
        },
    });

    if (isLoading) {
        return <div>isLoading...</div>
    }

    return (
        <div>
            <div>
                <input type='text' onChange={(e) => seTitle(e.target.value)} value={title}/>
                <button onClick={async () => {
                    try {
                        await addTodoMutation({title});
                        seTitle('');
                    } catch (error) {
                        console.log(error)
                    }
                }}>Add Todo
                </button>
            </div>
            {
                todos?.map((todo) => {
                    return <TodoCard key={todo.id} todo={todo}/>
                })
            }
        </div>
    )
}
export default ReactQuery;