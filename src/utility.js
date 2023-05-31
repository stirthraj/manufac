export function classWiseGroup(data,element){
   return data.reduce((a,b)=>{a[b[element]]=a[b[element]]?[...a[b[element]],b]:[b];return a},{})
}
export function modeFn(values,element){
    return values.map((m)=>{
      let obj={}
      m.map((ele)=>obj[ele[element]]?obj[ele[element]]=obj[ele[element]]+1:obj[ele[element]]=1)
      return Number(Object.keys(obj)[Object.values(obj).indexOf(Math.max(...Object.values(obj)))]).toFixed(3)
    })
  }
  export function sortedArray(values,element){
    return values.map(value=>value.sort((a,b)=>a[element]-b[element])) 
  }

  export function addingKey(data,element){
    return data.map(remElement=>{return {...remElement,[element]:Number((remElement.Ash*remElement.Hue/remElement.Magnesium).toFixed(3)) }})
       
  }
