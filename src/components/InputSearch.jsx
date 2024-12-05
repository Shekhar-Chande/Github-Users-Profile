import React, { useState } from 'react'
function InputSearch({ type, placeholder }) {
  const [username, setUsername] = useState("")
  const [githubData, setGithubData] = useState([])


  async function getData() {
    const data = await fetch(`https://api.github.com/users/${username}`)
    const result = await data.json()
    setGithubData(result)
  }
  console.log(username)
  console.log(githubData)

  return (
    <>
      <div className='flex justify-center items-center gap-1'>
        <input type={type} value={username} onChange={(e) => setUsername(e.target.value)} className='w-[400px] h-12 px-4 outline-none rounded-md' placeholder={placeholder} />
        <button className='border-2 border-black text-white py-1 px-4 bg-blue-500 border-none text-[25px] rounded-md' onClick={getData}>Search</button>
      </div>
    <div className='w-[400px] bg-gray-700 flex flex-col justify-center items-center mt-4 rounded-md'>
      <div className=' flex justify-center items-center gap-6'>
          <img className='w-[100px] rounded-[50%] mt-4' src={githubData.avatar_url} alt="" />
          <div className='flex flex-col gap-2'>
          <span className='text-white text-[25px]'>{githubData.name}</span>
          <span className='text-blue-500 text-[20px]'>{githubData.login}</span>
          </div>      
    </div> 
    <span className='text-white mt-5 text-[20px]'>{githubData.bio}</span>

      <div className='bg-slate-300 flex gap-8 px-8 mt-5 mb-5 rounded-md'>
          <div className='flex flex-col items-center'>
            <span className='text-blue-600 font-medium text-lg'>Repos</span>
            <span className='text-lg'>{githubData.public_repos}</span>
          </div>
          <div className='flex flex-col items-center'>
            <span  className='text-blue-600 font-medium text-lg'>Followers</span>
            <span className='text-lg'>{githubData.followers}</span>
          </div>
          <div className='flex flex-col items-center'>
            <span  className='text-blue-600 font-medium text-lg'>Following</span>
              <span className='text-lg'>{githubData.following}</span>

          </div>
      </div>
    </div>  
    </>
  )
}

export default InputSearch