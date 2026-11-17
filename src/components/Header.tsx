import TimeSelector from "./TimeSelector";

interface HeaderProps {
    duration: number;
     onSelectDuration: (duration: number) => void;
}

export default function Header({ duration, onSelectDuration }: HeaderProps) {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-800 pb-5">
            <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></span>
                <h1 className="text-2xl font-bold tracking-wider text-slate-100">
                    TYPE<span className="text-amber-400">FLOW</span>
                </h1>
            </div>
            <TimeSelector duration={duration} onSelect={onSelectDuration} />
        </header>
    );
}