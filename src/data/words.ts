export const ENGLISH_WORDS: string[] = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "it",
  "for", "not", "on", "with", "he", "as", "you", "do", "at", "this",
  "but", "his", "by", "from", "they", "we", "say", "her", "she", "or",
  "an", "will", "my", "one", "all", "would", "there", "their", "what",
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
  "when", "make", "can", "like", "time", "no", "just", "him", "know",
  "take", "people", "into", "year", "your", "good", "some", "could",
  "them", "see", "other", "than", "then", "now", "look", "only", "come",
  "its", "over", "think", "also", "back", "after", "use", "two", "how",
  "our", "work", "first", "well", "way", "even", "new", "want", "because",
  "any", "these", "give", "day", "most", "us", "system", "program", "code",
  "react", "build", "fast", "keyboard", "screen", "window", "developer",
  "world", "change", "follow", "create", "modern", "simple", "design"
];

export function generateRandomLine(wordCount: number = 9): string {
    const words: string[] = [];
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * ENGLISH_WORDS.length);
        words.push(ENGLISH_WORDS[randomIndex]);
    }
    return words.join(" ");
}