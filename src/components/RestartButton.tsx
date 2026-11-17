interface RestartButtonProps {
    onRestart: () => void;
}

export default function RestartButton({ onRestart }: RestartButtonProps) {
    return (
        <div className="flex justify-center">
            <button
                onClick={onRestart}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-amber-400 border border-slate-700 rounded-xl font-semibold transition-all cursor-pointer"
            >
                ↻ Restart Test
            </button>
        </div>
    );
}