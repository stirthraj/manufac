export default function Header({data}){
    return <>
             <div className="flex">
     <div className="bold w200">Measure</div>

        {data.map(hd=><div className="bold w200">Class {hd}</div>)}

     </div>
    </>
}