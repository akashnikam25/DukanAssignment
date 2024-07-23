import './App.css'
import { AmountProcessed } from './components/AmountProcessed'
import { NextPayout } from './components/NextPayout'
import { Orders } from './components/Orders'
import { Overview } from './components/Overview'
import { RevenueCard } from './components/RevenueCard'
import { Transactions } from './components/Transactions'

function App() {
  return (
    <>
    
    <div className='flex flex-col gap-5'>
     
    <Overview></Overview>
    <div className='flex gap-x-5'>
      <NextPayout amount={"2312.23"} title={"Next Payout"}  orders={23} ></NextPayout>
       <RevenueCard amount={"92,312.20"} title={"Amount Pending"}  orders={13}></RevenueCard>
       <AmountProcessed amount={"23,92,312.19"} title={"Amount Processed"}></AmountProcessed>
    </div>
    <div className="flex flex-col w-[1085px] h-[548px]  gap-3">
    <Transactions></Transactions>
       <Orders></Orders>
    </div>
    </div>
    </>
  )
}

export default App
