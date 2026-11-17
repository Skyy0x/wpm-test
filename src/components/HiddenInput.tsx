import type { RefObject } from 'react';

interface HiddenInputProps {
    inputRef: RefObject<HTMLInputElement | null>;
    value: string;
    onChange: (value: string) => void;
    disabled: boolean;
}

export default function HiddenInput({ inputRef, value, onChange, disabled }: HiddenInputProps) {
    return (
        <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            className="opacity-0 absolute -z-10 pointer-events-none"
        />
    );
}