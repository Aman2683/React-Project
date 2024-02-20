import React ,{useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] =useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Aman2683')
    //     .then(response => response.json())
    //     .then(data =>{
    //          console.log(data)
    //          setData(data)
    //     })

    // },[])
    return (
        <div>
        <div className='rounded-2xl text-center m-4 text-black p-4 text-3xl'> Github Followers : {data.followers}
        </div>
        <div className="flex flex-row justify-center rounded-sm" >
        <img className="rounded-3xl" src={data.avatar_url} alt='Git PIcture'width={300} />
        </div>
        <div>
        <p className=' m-4 p text-xl '>
            Hello everyone, I'm a recent MCA graduate with a strong passion for web development. I excel at crafting elegant and responsive user interfaces that enhance the overall user experience. With a keen eye for detail and a dedication to staying updated with the latest technologies, I strive to create seamless digital experiences that leave a lasting impression.</p>
        </div>
        
        </div>

    )
}

export default Github

export const githubInfoLoader =async() =>{
    const response = await fetch('https://api.github.com/users/Aman2683')
    return response.json()
}
