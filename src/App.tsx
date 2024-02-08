import ReactQuery from "./react-query/react-query.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQuery/>
        </QueryClientProvider>
    )
}

export default App
