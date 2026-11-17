import { useRef, useEffect } from 'react';
import { useTypingTest } from './hooks/useTypingTest';
import Header from './components/Header';
import TypingBoard from './components/TypingBoard';
import HiddenInput from './components/HiddenInput';
import ResultScreen from './components/ResultScreen';
import RestartButton from './components/RestartButton';
import Footer from './components/Footer';
import RecordsPanel from './components/RecordsPanel'; // <-- Nowy import
import StatusBar from './components/StatusBar';

export default function WpmTest() {
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        lines,
        userInput,
        timeLeft,
        duration,
        setDuration,
        isFinished,
        wpm,
        accuracy,
        bestWpm,
        bestAccuracy,
        testsCompleted,
        handleInput,
        resetTest
    } = useTypingTest(30);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    useEffect(() => {
        focusInput();
    }, [lines, isFinished]);

    return (
        <div
            onClick={focusInput}
            className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-mono"
        >
            <div className="max-w-4xl w-full space-y-6">
                <Header
                    duration={duration}
                    onSelectDuration={(newTime) => {
                        setDuration(newTime);
                        resetTest(newTime);
                  }}
                />

                <StatusBar timeLeft={timeLeft} wpm={wpm} accuracy={accuracy} />

                {isFinished ? (
                    <ResultScreen wpm={wpm} accuracy={accuracy} duration={duration} />
                ) : (
                    <TypingBoard
                        lines={lines}
                        userInput={userInput}
                        onBoardClick={focusInput}
                    />
                )}
                
                <RecordsPanel
                    bestWpm={bestWpm}
                    bestAccuracy={bestAccuracy}
                    testsCompleted={testsCompleted}
                />

                <HiddenInput
                    inputRef={inputRef}
                    value={userInput}
                    onChange={handleInput}
                    disabled={isFinished}
                />

                <RestartButton
                    onRestart={() => {
                        resetTest();
                        focusInput();
                    }}
                />

                <Footer />
            </div>
        </div>
    );
}