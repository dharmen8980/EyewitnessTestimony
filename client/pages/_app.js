import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  let credit = "Created by: Dharmendra Sharma";
  return <div>
    <p className='text-white fixed right-3 bottom-5'>{credit}</p>
  <Component {...pageProps}/>
  </div>
};

export default MyApp
