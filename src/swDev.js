export default function swDev()
{
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    console.log(swUrl);
    navigator.serviceWorker.register(swUrl).then((response)=>{
        console.warn("response",response)
    })
}
