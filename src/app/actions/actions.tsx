'use server'

export const signupAction=async(formData:FormData)=>{
    const email=formData.get('email')
    const password=formData.get('password')
    const confirmPassword=formData.get('confirmPassword')
    if(!email||!password||!confirmPassword){

    }
    if(password!==confirmPassword){

    }
    console.log(email,password,confirmPassword)
}

export const loginAction=async(formData:FormData)=>{
    const email=formData.get('email')
    const password=formData.get('password')
    if(!email||!password){

    }
    console.log(email,password)

}

export const createBlogPost=async()=>{

    //check to see if authenticated
    
}
export const updateBlogPost=async()=>{
    //check to see if authenticated


}
export const deleteBlogPost=async()=>{
    //check to see if authenticated

}