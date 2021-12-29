import React, { useState } from "react";

import SelectList from "./SelectList";

const Dropdown = () => {
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");


  const TOKEN = "9dec0a88-4b9a-4a66-a5b5-198da07709d9";
  

  return (
    <div>
      <h1>DROPDOWN IBM</h1>
      <SelectList 
      title="estado" /* title="region"  */
      url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} 
      handleChange={(e) => {setRegion(e.target.value)}} />
    {region && <SelectList 
      title="municipios" /* title="country" */
      url={`https://api.copomex.com/query/get_municipio_por_estado/${region}?token=${TOKEN}`} 
      handleChange={(e) => {setCountry(e.target.value)}} />}
      
    {country && <SelectList 
      title="colonia" /* title="state"  */
      url={`https://api.copomex.com/query/get_colonia_por_municipio/${country}?token=${TOKEN}`}
      handleChange={(e) => {setState(e.target.value)}} />}
      

     {/*  <pre>
        <code>
          {region} - {country} - {state}
        </code>
      </pre> */}
    </div>
  );
};

export default Dropdown;
