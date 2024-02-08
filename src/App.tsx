import ReactQuery from "./react-query/react-query.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

function App() {
    const [showReactQuery, setShowReactQuery] = useState(true)
    return (
        <QueryClientProvider client={queryClient}>
            <button onClick={() => setShowReactQuery(!showReactQuery)}>Toggle ReactQuery</button>
            {showReactQuery && <ReactQuery/>}
        </QueryClientProvider>
    )
}

export default App
