
export const getGifs = async( category ) => {
        
    const apiKey = 'AMq9rq1fXzR4v1IVNUf0QWU4e0bC0zKZ';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    
    return gifs;
}