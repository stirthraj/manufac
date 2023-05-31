export default function Median({data,type}){
    return <>
             <div className="flex">
     <div className="bold w200">{type} Median</div>

        {data.map(med=><div className="w200">{med}</div>)}

     </div>
    </>
}