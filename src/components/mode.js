export default function Mode({data,type}){
    return <>
        <div className="flex">
     <div className="bold w200">{type} Mode</div>
     {data.map(md=><div className="w200"> {md}</div>)}
  
      
     </div>
    </>
}