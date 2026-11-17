interface ResultScreenProps {
    wpm: number;
    accuracy: number;
    duration: number;
}

export default function ResultScreen({ wpm, accuracy, duration }: ResultScreenProps) {
    return (
        <div className="bg-slate-800/60 border border-amber-400/30 rounded-2xl p-8 text-center space-y-4">
            <h2 className="text-xl text-slate-400 uppercase tracking-widest">Time's Up!</h2>
            <div className="flex justify-center gap-12 py-2">
                <div>
                    <p className="text-5xl font-extrabold text-amber-400">{wpm}</p>
                    <p className="text-sm text-slate-400 mt-1">WPM</p>
                </div>
                <div>
                    <p className="text-5xl font-extrabold text-emerald-400">{accuracy}%</p>
                    <p className="text-sm text-slate-400 mt-1">Accuracy</p>
                </div>
            </div>
            <p className="text-slate-500 text-sm">Test duration: {duration} seconds</p>
        </div>
    );
}