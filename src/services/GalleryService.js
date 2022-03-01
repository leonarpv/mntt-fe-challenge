const getImages=async ()=>{
const response= await fetch('https://picsum.photos/v2/list');

return response;
}

export default {
    getImages
}