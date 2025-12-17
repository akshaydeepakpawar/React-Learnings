type Info={
    id:number,
    name:string,
    email:string
}
type adminInfo= Info & {
    role:string,
    lastLogin:Date
} 

export {type Info,type adminInfo};