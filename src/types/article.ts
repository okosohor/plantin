export interface Article {
    id: number,
    title: string,
    text: string,
    time: string,
    date: string,
    image: string,
    type?: 'new' | 'top'
}