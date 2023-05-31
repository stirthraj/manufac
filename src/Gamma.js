import Header from "./components/header"
import Mean from "./components/mean"
import Median from "./components/median"
import Mode from "./components/mode"
import { addingKey, classWiseGroup, modeFn, sortedArray } from "./utility"
import data from "./data.json"
export default function Gamma(){
    let gammaData=addingKey(data,"Gamma")
let formatGamma=classWiseGroup(gammaData,"Alcohol")
let valuesGamma=Object.values(formatGamma)
let sortedArGamma=sortedArray(valuesGamma,"Gamma")

console.log("SORTEDGAMMA",sortedArGamma.map(ar=>ar.map(dd=>dd.Gamma)))

    return    <div className="grid p20">
    <Header data={Object.keys(formatGamma)}/>
     <Mean data={ sortedArGamma.map((row)=>(row.reduce((pV,cI)=>pV+Number(cI.Gamma),0)/row.length).toFixed(3))} type={"Gamma"}/>
     <Median data={sortedArGamma.map((row)=>
      row.length%2===0?
      ((row[row.length/2].Gamma+row[Number(row.length/2+1)].Gamma)/2).toFixed(3):(row[Number((row.length+1)/2)].Gamma).toFixed(3)
     )}
     type={"Gamma"}
     />
     <Mode data={modeFn(valuesGamma,"Gamma")} type={"Gamma"}/>
    </div>
}