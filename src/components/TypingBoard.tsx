import WordLine from "./WordLine";

interface TypingBoardProps {
    lines: string[];
    userInput: string;
    onBoardClick: () => void;
}

export default function TypingBoard({ lines, userInput, onBoardClick }: TypingBoardProps) {
    return (
        <div
            onClick={onBoardClick}
            className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 space-y-4 select-none cursor-text shadow-xl"
        >
            {lines.map((lineText, index) => (
                <WordLine
                    key={`${index}-${lineText.slice(0, 10)}`}
                    text={lineText}
                    isActive={index === 0}
                    userInput={index === 0 ? userInput : ''}
                />
            ))}
        </div>
    );
}