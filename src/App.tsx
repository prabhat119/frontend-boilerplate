import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import DataTest from '@/pages/DataTest';

function App() {
    return (
        <BrowserRouter>
            <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white p-4">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                        Enterprise Vite Boilerplate
                    </h1>

                    <nav className="mt-6 flex justify-center gap-6 text-lg">
                        <Link
                            to="/"
                            className="hover:text-cyan-400 underline decoration-cyan-400/30 underline-offset-4 transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="hover:text-cyan-400 underline decoration-cyan-400/30 underline-offset-4 transition"
                        >
                            About
                        </Link>
                        <Link
                            to="/query"
                            className="hover:text-emerald-400 underline decoration-emerald-400/30 underline-offset-4 transition"
                        >
                            TanStack
                        </Link>
                    </nav>
                </header>

                <main className="w-full max-w-md rounded-xl bg-slate-800 p-8 shadow-xl border border-slate-700 text-center">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/query" element={<DataTest />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
