import { APIPATH, BASEURL } from "./constants"

export const visitorCheck = () => {
    fetch(BASEURL + APIPATH.BIRTHDAY + 'visitorCheck', 
    {
        method: 'post',
    });
}

export const getComments = async (page) => {
    const res = await fetch(BASEURL + APIPATH.BIRTHDAY + `comment/${page}`, 
    {
        method: 'get',
    });
    return await res.json();
}


export const insertComment = async (author, password, comment) => {
    let data = {
        author,
        password,
        comment,
    }
    try{
        const res = await fetch(BASEURL + APIPATH.BIRTHDAY + 'insertComment', 
            {
                method: 'post',
                body: JSON.stringify(data),
            }
        );
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export const deleteComments = async (idx, password) => {
    const query = `idx=${idx}&password=${password}`
    const res = await fetch(BASEURL + APIPATH.BIRTHDAY + `deleteComment?${query}`, 
    {
        method: 'post'
    });
    return await res.json();
}