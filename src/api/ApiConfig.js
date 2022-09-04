
const apiConfig = {
    baseUrl:"https://api.themoviedb.org/3/",
    apiKey:"fb0a226fd7527375e81c38b07ede3413",
    originalImage: (imgPath)=>`https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image: (imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`

}

export default apiConfig;