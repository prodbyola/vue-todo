export const tags = [
    { title: 'work', color: 'rgba(137, 43, 226, 0.308)' },
    { title: 'study', color: 'rgb(117, 242, 250)' },
    { title: 'entertainment', color: 'rgb(247, 147, 148)' },
    { title: 'family', color: 'rgb(184, 255, 179)' }
]

export type TaskType = {
    title: string
    description: string
    done: boolean
    tags: string[]
}