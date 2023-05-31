export default function Mean({data,type}){
    return <>
             <div className="flex">
     <div className="bold w200">{type} Mean</div>
     {data.map(me=><div className="w200"> {me}</div>)}
     </div>
    </>
}