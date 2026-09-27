import { useCounterState } from '../store/useCounterStore';

export default function HomePage() {
    const { count, increment, decrement } = useCounterState();

    return (
        <div className="text-center">
            <h2 className="text-3xl font-semibold text-cyan-400">Home Page</h2>
            <p className="mt-2 text-slate-400">Global State Counter via Zustand:</p>

            <div className="mt-4 flex items-center justify-center gap-4">
                <button
                    onClick={decrement}
                    className="rounded bg-slate-700 px-4 py-2 hover:bg-slate-600 transition"
                >
                    -
                </button>
                <span className="text-2xl font-bold min-w-[3ch]">{count}</span>
                <button
                    onClick={increment}
                    className="rounded bg-slate-700 px-4 py-2 hover:bg-slate-600 transition"
                >
                    +
                </button>
            </div>
        </div>
    );
}
