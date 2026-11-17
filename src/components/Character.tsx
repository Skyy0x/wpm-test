export type CharacterStatus = 'last-correct' | 'correct' | 'incorrect' | 'current' | 'upcoming';

interface CharacterProps {
    char: string;
    status: CharacterStatus;
}

export default function Character({ char, status }: CharacterProps) {
    const styles: Record<CharacterStatus, string> = {
        'last-correct': 'text-white font-bold',
        'correct': 'text-emerald-400',
        'incorrect': 'text-rose-500 bg-rose-500/20 rounded-sm',
        'current': 'text-slate-500 border-b-2 border-amber-400 animate-pulse',
        'upcoming': 'text-slate-500'
    };

    return (
        <span className={styles[status]}>
            {char}
        </span>
    );
}