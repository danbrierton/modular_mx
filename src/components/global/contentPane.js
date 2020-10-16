import React from 'react';
import AfOrderForm              from '../content/afOrderForm.js'
import AfAcftDelayDiscrep       from '../content/afAcftDelayDiscrep.js'
import AfAcftEngineData         from '../content/afAcftEngineData.js'
import AfAcftExcepRel           from '../content/afAcftExcepRel.js'
import AfAcftLifingUpdate       from '../content/afAcftLifingUpdate.js'
import AfAcftReccurMx           from '../content/afAcftReccurMx.js'
import AfAcftServiceUpdate      from '../content/afAcftServiceUpdate.js'
import AfAcftUpcomingMajorInsp  from '../content/afAcftUpcomingMajorInsp.js'
import AfAcftInspCert           from '../content/afAcftInspCert.js'
import AfAcftWorkOrder          from '../content/afAcftWorkOrder.js'


const ContentPane = (props) => {

    const renderContent = () => {
        let returnArray=[];
        props.state.userPages[props.state.currentlySelectedPage].forEach(
            (element, index, array)=>{
                if (index > 0){
                    if      (element==="AF Order Form (2005)")                  {returnArray = returnArray.concat(<AfOrderForm/>)}
                    else if (element==="AF Acft Delayed Discrepancies")         {returnArray = returnArray.concat(<AfAcftDelayDiscrep/>)}
                    else if (element==="AF Acft Engine Data")                   {returnArray = returnArray.concat(<AfAcftEngineData/>)}
                    else if (element==="AF Acft Exceptional Release")           {returnArray = returnArray.concat(<AfAcftExcepRel/>)}
                    else if (element==="AF Acft Inspection Certification")      {returnArray = returnArray.concat(<AfAcftInspCert/>)}
                    else if (element==="AF Acft Lifing")                        {returnArray = returnArray.concat(<AfAcftLifingUpdate/>)}
                    else if (element==="AF Acft Reccuring Maintenance")         {returnArray = returnArray.concat(<AfAcftReccurMx/>)}
                    else if (element==="AF Acft Servicing Update")              {returnArray = returnArray.concat(<AfAcftServiceUpdate/>)}
                    else if (element==="AF Acft Upcoming Major Inspections")    {returnArray = returnArray.concat(<AfAcftUpcomingMajorInsp/>)}
                    else if (element==="AF Acft New Work Order")                {returnArray = returnArray.concat(<AfAcftWorkOrder/>)}
                    else {returnArray = returnArray.concat(element) }
                }
            }
        )
        return returnArray
    }

    return(
        renderContent()
    )
}

export default ContentPane