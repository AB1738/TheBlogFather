import {z} from 'zod'

export const userSchema=z.object({
    email:z.string().email({ message: "Invalid email address" }),
    username:z.string().min(3,{ message: "Username must be at least 3 characters" }).max(16,{ message: "Username can be no longer than 16 characters" }),
    password:z.string().min(8,{ message: "Password must be at least 8 characters" }).trim(),
})
export const loginSchema=z.object({
    email:z.string().email({ message: "Invalid email address" }),
    password:z.string().min(8,{ message: "Password must be at least 8 characters" }),
})


export const blogPostSchema=z.object({
    title:z.string().min(5,{ message: "Title must be at least 5 characters" }).max(255,{ message: "Title can be no longer than 255 characters" }),
    description:z.string().min(100,{ message: "Description must be at least 100 characters" }),
    blogPostText:z.string().min(100,{ message: "Blog Post must be at least 500 characters" }),
    author: userSchema.omit({ password: true }), 
    authorId:z.string(),

})
export const commentSchema=z.object({
    author: userSchema.omit({ password: true }), 
    authorId:z.string(),
    text:z.string().min(10,{ message: "Comment must be at least 10 characters" }),

})

export type User=z.infer<typeof userSchema>
export type Login=z.infer<typeof loginSchema>
export type BlogPost=z.infer<typeof blogPostSchema>
export type Comment=z.infer<typeof commentSchema>


  
  