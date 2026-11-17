interface TimeSelectorProps {
    duration: number;
    onSelect: (time: number) => void;
}

const TIMES: number[] = [15, 30, 60];

export default function TimeSelector({ duration, onSelect }: TimeSelectorProps) {
    return (
        <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/50">
            {TIMES.map((time) => (
                <button
                    key={time}
                    onClick={() => onSelect(time)}
                    className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                        duration === time
                        ? 'bg-amber-400 text-slate-950'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                    {time}s
                </button>
            ))}
        </div>
    );
}