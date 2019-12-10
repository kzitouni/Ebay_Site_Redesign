import React, {useState, useEffect} from 'react'

const api = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=KarimZit-TestKey-PRD-83882c164-20d40dd0&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=harry%20potter%20phoenix&itemFilter.name=MaxPrice&itemFilter.value=10.00&itemFilter.paramName=Currency&itemFilter.paramValue=USD&paginationInput.entriesPerPage=6'
const swapi = 'https://swapi.co/api/people/1/'
const Starwars = () => {
const [product, setProduct] = useState("yes")
      useEffect( () => {
        async function fetchData(){
          const res = await fetch(api);
          res.json()
          .then(data => setProduct(data.findItemsByKeywordsResponse)) 
      } 
    fetchData()
  }, [])
  setTimeout( () => {
    console.log(product)
  }, 3000)
        return (
        <div> 
{/* {product === "yes" ? <h1>Loading...</h1> : product[0].searchResult[0].item[0].title[0]} 
{product === "yes" ? <h1>Loading...</h1> : <img src={product[0].searchResult[0].item[0].galleryURL[0]} />} */}
        </div>) 
    }

export default Starwars