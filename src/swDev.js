export default function swDev()
{
    let cacheUrl = `${process.env.PUBLIC_URL}/cache.js`;
    navigator.serviceWorker.register(cacheUrl).then((response)=>{
        console.warn("response",response)
    })
}
