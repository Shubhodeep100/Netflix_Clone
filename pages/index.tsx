import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {

        destination: '/auth',
        permanent: false,
      }
    }
  }


  return {
    props: {}
  }
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-6xl font-serif font-bold text-white">Hello, Welcome to Netflix 😃</p>
      <button onClick={() => signOut()} className='text-white w-40 h-10 bg-red-500 hover:bg-yellow-400 rounded-lg transform transition duration-500 hover:scale-110 text-2xl font-serif'>Logout</button>
    </div>

  )
}
