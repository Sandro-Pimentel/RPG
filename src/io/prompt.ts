import promptSync from 'prompt-sync'

export default class Prompt {
    public getNumber(message: string): number {
        let prompt = promptSync();
        let value = prompt(message)
        let number  = new Number(value)
        return number.valueOf()
    }
    public getText(message: string): string {
        let prompt = promptSync();
        let text = prompt(message)
        return text
    }
}