
export const Transactions = ()=>{
    return <>
  
        <div className="flex flex-col justify-between w-[252px] h-[80px]  ">
        <p className="text-xl text-[#1A181E] font-medium Galano Grotesque">Transactions | This Month</p>
         <div className="flex w-[241px] h-[32px] justify-between">
            <div className="flex w-[118px] h-[32px] rounded-[40px] px-4 py-1.5 text-sm gap-1.5 bg-[#146EB4]">
                <p className="text-[#FFFFFF]">Payouts (22)</p>
            </div>
            <div className="flex w-[111px] h-[32px] rounded-[40px] px-4 py-1.5  bg-[#E6E6E6] text-sm gap-1.5 ">
                <p className="text-[#808080]">Refunds (2)</p>
            </div>
        </div>
        </div>    
    </>
}