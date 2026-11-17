interface RecordsPanelProps {
    bestWpm: number;
    bestAccuracy: number;
    testsCompleted: number;
}

export default function RecordsPanel({ bestWpm, bestAccuracy, testsCompleted }: RecordsPanelProps) {
    return (
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 flex justify-around items-center text-center">
            <div>
                <span className="text-xs text-slate-500 block mb-1">RECORD WPM</span>
                <span className="text-2xl font-bold text-amber-400">{bestWpm}</span>
            </div>
            <div className="w-[1px] h-8 bg-slate-700"></div>
            <div>
                <span className="text-xs text-slate-500 block mb-1">HIGHEST ACCURACY</span>
                <span className="text-2xl font-bold text-emerald-400">{bestAccuracy}%</span>
            </div>
            <div className="w-[1px] h-8 bg-slate-700"></div>
            <div>
                <span className="text-xs text-slate-500 block mb-1">COMPLETED TESTS</span>
                <span className="text-2xl font-bold text-slate-200">{testsCompleted}</span>
            </div>
        </div>
    );
}