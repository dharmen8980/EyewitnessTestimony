import Head from 'next/head'
import Link from 'next/link'

export default function Home({updateFormData}) {
  const handleNameChange = (event) => {
    updateFormData({name: event.target.value})
}
const handleCWIDChange = (event) => {
    updateFormData({cwid: event.target.value})
}
const handleRaceChange = (event) => {
    updateFormData({race: event.target.value})
}
  return (
    <div>
    <div>
      <Head>
        <title>Virtual Hut</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    <div className='text-3xl text-white bg-red relative top-10'>
    <div>
        <div className='flex flex-col flex-auto justify-center items-center'>
        <p className='text-center px-10 mx-20'>
          Welcome to Eyewitness testimony survey!<br/>
          In this survey you will be presented with videos and pictures
          of individuals from same ethinicity and similar appearance.
          Throughout the survey you have to answer yes or no, if you think 
          the individual are same or not.
        </p>
        <p className='my-5 font-semibold text-yellow-400 text-4xl'>
          Enter you information below and hit start to begin the survey!
        </p>
        </div>
        <div className='text-white grid grid-cols-2 w-fit place-items-end gap-3 my-4'>
                <div className='text-white'>
                    <p className='my-3' >Name: </p>
                    <p className='my-3'>CWID: </p>
                    <p className='my-3'>Race: </p>
                </div>
                <div className='col-spans-2 text-black'>
                    <p className='my-3' ><input name="name" type="text" className='w-[420px] text-md' onChange={handleNameChange}/></p>
                    <p className='my-3'><input name="cwid" type="number" className='w-[420px]' onChange={handleCWIDChange}/></p>
                    <p className='my-3'><input name="race" type="text" className='w-[420px]' onChange={handleRaceChange}/> </p>
                </div>
            </div>
    </div>
    </div>
    <div className='w-fit mx-auto'>
        <button className = "realtive mt-20 content-center">
              <Link href='q1' passHref className='font-extrabold text-3xl text-white bg-blue-600 px-5 py-2 rounded-md'>
              Start
              </Link>    
        </button> 
    </div>
        
    </div>
  )
}
