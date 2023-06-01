export default function Mean({data,type}){
    return <>
             <div className="flex">
     <div className="bold w200">{type} Mean</div>
     {data.map((me,index)=><div key={index} className="w200"> {me}</div>)}
     </div>
    </>
}