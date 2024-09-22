export const useLocalStorage=()=>{


  function storeData(name,data){

    localStorage.setItem(name,JSON.stringify(data));
  }
  const retrieveData=(name)=>{

   
  //  console.log(name,"=name")
   return JSON.parse(localStorage.getItem(name));

  }


return({storeData,retrieveData})
}