import Image from 'next/image'
import BetCard from '@/components/ui/BetCard'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {

  const [allBets, setAllBets] = useState()

  const getBets = async () => {
    try {
      const res = await axios.get("https://backend-sui.vercel.app/bets/allbets")
      setAllBets(res.data);
    }
    catch (e) {
      window.alert(e)
    }
  }

  useEffect(() => {
    getBets()
  }, [])

  return (
    <div className='bg-gradient-to-r from-rose-100 to-teal-100 h-screen'>
      <div className='text-gray-300 pt-36'>
        <div className='text-xl flex flex-row justify-between items-center text-black'>
          <div className='ml-10'>
            <div className='text-4xl text-red-900 font-bold'>
              Welcome to SUI Decentralized Betting
            </div>
            <div className='mt-4 pr-52 text-orange-700 font-semibold '>
              {"At SUI Decentralized Betting, we're revolutionizing the way you engage with betting platforms. Powered by the secure and innovative SUI blockchain, our decentralized platform ensures trustless and transparent betting experiences for users worldwide."}
            </div>
          </div>
          <div className='mr-20 drop-shadow-2xl'>
            <BetCard />
          </div>
        </div>
        <div className='mt-16 flex flex-col justify-center text-black'>
          <div className='flex justify-center mb-10 text-3xl text-red-900 font-bold'>Ongoing Betting</div>
          <div className='flex flex-row space-x-10 justify-center overflow-x-scroll pb-10 no-scrollbar pl-[34rem] pr-6'>
            {
              allBets && allBets.map((item) => (
                <div className='snap-center hover:drop-shadow-xl' key={index}><BetCard desc={item.bet_description} buttonA={item.bet_team1} buttonB={item.bet_team2} betName={item.bet_name}/></div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

