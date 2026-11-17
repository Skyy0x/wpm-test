interface StatItemProps {
    label: string;
    value: string | number;
    highlight?: boolean;
}

export default function StatItem({ label, value, highlight = false }: StatItemProps) {
    return (
        <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <span className="text-xs font-semibold tracking-widest text-slate-500 mb-1">
                {label}
            </span>
            <span className={`text-3xl font-bold ${highlight ? 'text-amber-400' : 'text-slate-100'}`}>
                {value}
            </span>
        </div>
    );
}