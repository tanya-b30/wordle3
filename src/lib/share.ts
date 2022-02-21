import { getGuessStatuses } from './statuses'

export const shareStatus = (guesses: string[]) => {
  navigator.clipboard.writeText(
    `Web3 Wordle by The Product House ${guesses.length}/6\n\n` +
    generateEmojiGrid(guesses) +
    '\n\n@0xTPH @0xPolygon\n\nIf you still haven\'t, register now: https://www.theproduct.house/learn/live-web3-masterclass'
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
