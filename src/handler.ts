export async function handleRequest(): Promise<Response> {

 const ethPrice= await TODO.get('ETH',{cacheTtl: 3600})
 const btbPrice=await TODO.get('BNB',{cacheTtl: 3600})
  return new Response(JSON.stringify({
    eth:ethPrice,
    btb:btbPrice
  }),{
    status: 200
  })
}
export async function eventTrigger():Promise<void>{

  const response=await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1027,1839&CMC_PRO_API_KEY=5e61247b-c376-4d04-89f9-2ce908f0501f&convert=USDT')
  const responseJson:any = await response.json();
  const ethPrice=responseJson.data[1027].quote.USDT.price
  const btbPrice=responseJson.data[1839].quote.USDT.price
  
  await TODO.put('ETH', JSON.stringify({eth:ethPrice}))
  await TODO.put('BNB', JSON.stringify({btb:btbPrice}))
}
