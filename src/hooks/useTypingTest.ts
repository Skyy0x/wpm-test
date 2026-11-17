import { useState, useEffect, useCallback } from 'react';
import { generateRandomLine } from '../data/words';

export interface UseTypingTestReturn {
    lines: string[];
    userInput: string;
    timeLeft: number;
    duration: number;
    setDuration: (duration: number) => void;
    isFinished: boolean;
    wpm: number;
    accuracy: number;
    bestWpm: number;
    bestAccuracy: number;
    testsCompleted: number;
    handleInput: (value: string) => void;
    resetTest: (newDuration?: number) => void;
}

export function useTypingTest(initialTime: number = 30): UseTypingTestReturn {
    const [duration, setDuration] = useState<number>(initialTime);
    const [timeLeft, setTimeLeft] = useState<number>(initialTime);
    const [lines, setLines] = useState<string[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isFinished, setIsFinished] = useState<boolean>(false);

    const [totalCharsTyped, setTotalCharsTyped] = useState<number>(0);
    const [correctCharsTotal, setCorrectCharsTotal] = useState<number>(0);

    const [bestWpm, setBestWpm] = useState<number>(() => {
        const saved = localStorage.getItem('typeflow_best_wpm');
        return saved ? parseInt(saved, 10) : 0;
    });

    const [bestAccuracy, setBestAccuracy] = useState<number>(() => {
        const saved = localStorage.getItem('typeflow_best_acc');
        return saved ? parseInt(saved, 10) : 0;
    });

    const [testsCompleted, setTestsCompleted] = useState<number>(() => {
        const saved = localStorage.getItem('typeflow_tests_count');
        return saved ? parseInt(saved, 10) : 0;
    });

    const resetTest = useCallback((newDuration: number = duration) => {
        setDuration(newDuration);
        setTimeLeft(newDuration);
        setLines([
        generateRandomLine(),
        generateRandomLine(),
        generateRandomLine()
        ]);
        setUserInput('');
        setIsActive(false);
        setIsFinished(false);
        setTotalCharsTyped(0);
        setCorrectCharsTotal(0);
    }, [duration]);

    useEffect(() => {
        resetTest(duration);
    }, [duration, resetTest]);

    const currentLine = lines[0] || '';
    let currentLineCorrect = 0;
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === currentLine[i]) currentLineCorrect++;
    }

    const allTyped = totalCharsTyped + userInput.length;
    const allCorrect = correctCharsTotal + currentLineCorrect;
    const timeElapsedInMinutes = (duration - timeLeft) / 60;

    const wpm = timeElapsedInMinutes > 0
        ? Math.round((allCorrect / 5) / timeElapsedInMinutes)
        : 0;

    const accuracy = allTyped > 0
        ? Math.round((allCorrect / allTyped) * 100)
        : 100;

    useEffect(() => {
        if (!isActive || isFinished) return;

        const timer = setInterval(() => {
        setTimeLeft((prev) => {
            if (prev <= 1) {
            clearInterval(timer);
            setIsFinished(true);
            setIsActive(false);

            setBestWpm((prevBest) => {
                const newBest = Math.max(prevBest, wpm);
                localStorage.setItem('typeflow_best_wpm', newBest.toString());
                return newBest;
            });

            setBestAccuracy((prevBestAcc) => {
                const newBestAcc = Math.max(prevBestAcc, accuracy);
                localStorage.setItem('typeflow_best_acc', newBestAcc.toString());
                return newBestAcc;
            });

            setTestsCompleted((prevCount) => {
                const newCount = prevCount + 1;
                localStorage.setItem('typeflow_tests_count', newCount.toString());
                return newCount;
            });

            return 0;
            }
            return prev - 1;
        });
        }, 1000);

        return () => clearInterval(timer);
    }, [isActive, isFinished, wpm, accuracy]);

    const handleInput = (value: string) => {
        if (isFinished) return;
        if (!isActive && value.length > 0) {
            setIsActive(true);
        }

        if (value.length >= currentLine.length) {
            let lineCorrect = 0;
            for (let i = 0; i < currentLine.length; i++) {
                if (value[i] === currentLine[i]) lineCorrect++;
            }

            setTotalCharsTyped((prev) => prev + currentLine.length);
            setCorrectCharsTotal((prev) => prev + lineCorrect);

            setLines((prevLines) => [
                prevLines[1],
                prevLines[2],
                generateRandomLine()
            ]);
            setUserInput('');
        } else {
            setUserInput(value);
        }
    };

    return {
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
    };
}