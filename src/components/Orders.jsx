

export const Orders = ()=>{
    return <>
        
        <div className="flex flex-col justify-between content-center w-[1061px] h-[40px]  gap-3 ">
            <div className="flex  w-[1061px] h-[40px] items-center justify-between">
                <div className="flex w-[248px] h-[40px] border-2 rounded-sm gap-2 px-4 py-2 border-[#D9D9D9]">
        <div className="border-2 border-[#FFFFFF] flex item-center  text-[#999999]"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="13.45" height="13.19">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</div>
         <div className="w-[194px] h-[20px]   font-[400] text-[#999999]">
            <p className="text-xs Galano Grotesque">Order ID or transaction ID</p>
         </div>
        </div>
       <div class="flex items-center gap-3">
        <button class="flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded min-w-[75px]">Sort</button>
        <button class="flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></button></div>
          
       


            </div>
        </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
            <colgroup>
            <col className="w-1/6"></col>
            <col className="w-1/6"></col>
            <col className="w-1/6"></col>
            <col className="w-1/6"></col>
            <col className="w-1/6"></col>
            <col className="w-1/6"></col>
            </colgroup>
            <thead className="text-[#4D4D4D]">
              <tr className="bg-[#F2F2F2]">
            <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l">Date</th>
            <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">Status</th>
            <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">Transaction ID</th>  
            <th className="px-3 py-[10px] text-right text-sm font-medium tracking-wider rounded-r">Order Amount</th>
            <th className="px-3 py-[10px] text-right text-sm font-medium tracking-wider rounded-r">Transaction Fees</th>
            <th className="px-3 py-[10px] text-right text-sm font-medium tracking-wider rounded-r">Total</th>
            </tr>
            </thead>
            <tbody className="bg-white divide-[#E6E6E6]">
                <tr className="text-sm">
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">Today, 9:00 PM</td>
                    <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]"><span class="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>Processing</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">12345689101</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D] text-right">₹10,125.00</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1,125.00</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹9,312.00</td>
                    <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span></tr>
                    <tr class="text-sm"><td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">Tomorrow, 10:00 AM</td>
                    <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">12345689102</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D] text-right">₹10,125.00</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹950.50</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1,234.50</td>
                    <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span></tr>
                     <tr class="text-sm"><td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">Tomorrow, 10:00 AM</td>
                    <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">12345689102</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D] text-right">₹10,125.00</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹950.50</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1,234.50</td>
                    <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span></tr>
                     <tr class="text-sm"><td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">Tomorrow, 10:00 AM</td>
                    <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">12345689102</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D] text-right">₹10,125.00</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹950.50</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1,234.50</td>
                    <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span></tr>
                     <tr class="text-sm"><td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">Tomorrow, 10:00 AM</td>
                    <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">12345689102</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D] text-right">₹10,125.00</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹950.50</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1,234.50</td>
                    <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span></tr>
                     <tr class="text-sm"><td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">Tomorrow, 10:00 AM</td>
                    <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">12345689102</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D] text-right">₹10,125.00</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹950.50</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1,234.50</td>
                    <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span></tr>
                     <tr class="text-sm"><td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">Tomorrow, 10:00 AM</td>
                    <td class="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                    <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">12345689102</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D] text-right">₹10,125.00</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹950.50</td>
                    <td class="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1,234.50</td>
                    <span class="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span></tr>
                   </tbody>
        </table>
        
        
    </div>
     
    </>
}