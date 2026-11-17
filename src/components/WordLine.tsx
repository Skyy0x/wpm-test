import type { CharacterStatus } from './Character';
import Character from './Character';

interface WordLineProps {
    text: string;
    isActive: boolean;
    userInput: string;
}

export default function WordLine({ text, isActive, userInput }: WordLineProps) {
    let lastCorrectIndex = -1;
    if (isActive) {
        for (let i = 0; i < userInput.length; i++) {
            if (userInput[i] === text[i]) {
                lastCorrectIndex = i;
            }
        }
    }

    return (
        <div className="text-2xl sm:text-3xl tracking-wide font-mono whitespace-pre overflow-hidden">
            {text.split('').map((char, idx) => {
                let status: CharacterStatus = 'upcoming';

                if (isActive) {
                    if (idx < userInput.length) {
                        if (userInput[idx] === char) {
                            status = idx === lastCorrectIndex ? 'last-correct' : 'correct';
                        } else {
                            status = 'incorrect';
                        }
                    } else if (idx === userInput.length) {
                        status = 'current';
                    }
                }

                return <Character key={idx} char={char} status={status} />;
            })}
        </div>
    );
}