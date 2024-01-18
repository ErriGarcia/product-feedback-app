export interface Suggestion {
    id: number
    title: string
    category: string
    upvotes: number
    status: string
    description: string
    comments: Comment[]
};
  
export interface Comment {
    id: number
    content: string
    user: User
    replies?: Reply[]
};
  
export interface User {
    image: string
    name: string
    username: string
};
  
export interface Reply {
    content: string
    replyingTo: string
    user: User2
};
  
export interface User2 {
    image: string
    name: string
    username: string
}; 