import { useQuery } from '@tanstack/react-query';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export default function DataTest() {
    const {
        data: todos,
        isLoading,
        error,
    } = useQuery<Todo[]>({
        queryKey: ['todos'],
        queryFn: async () => {
            const res = await fetch('https://typicode.com');
            if (!res.ok) throw new Error('Network error occured');
            return res.json();
        },
    });

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">TanStack Query Test</h2>

            {isLoading && <p className="text-slate-400 animate-pulse">Loading data assets...</p>}
            {error && <p className="text-red-400">Error: {(error as Error).message}</p>}

            <ul className="space-y-2 text-left text-sm">
                {todos?.map((todo) => (
                    <li
                        key={todo.id}
                        className="p-2 rounded bg-slate-700/50 border border-slate-700 flex items-center justify-between"
                    >
                        <span className="truncate max-w-[250px]">{todo.title}</span>
                        <span
                            className={`text-xs px-2 py-0.5 rounded ${todo.completed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}
                        >
                            {todo.completed ? 'Done' : 'Pending'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
