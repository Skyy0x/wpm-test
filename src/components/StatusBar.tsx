import StatItem from './StatItem';

interface StatsBarProps {
    timeLeft: number;
    wpm: number;
    accuracy: number;
}

export default function StatusBar({ timeLeft, wpm, accuracy }: StatsBarProps) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <StatItem label="TIME" value={`${timeLeft}s`} highlight />
            <StatItem label="WPM" value={wpm} />
            <StatItem label="ACCURACY" value={`${accuracy}%`} />
        </div>
    );
}