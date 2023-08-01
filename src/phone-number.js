import truecallerjs from "truecallerjs";
import {ID} from './config/serverConfig.js';

 export async function performTruecallerSearch() {
    
  const searchData = {
    number: "7561932332",
    countryCode: "IN",
    installationId:ID,
  };

  try {
    const response = await truecallerjs.search(searchData);
    console.log(response.json());

    // Additional response methods:
    // console.log(response.xml());
    // console.log(response.yaml());
    // console.log(response.text());

    // // Example of available data from the response:
    console.log(response.getName()); // "Sumith Emmadi"
    console.log(response.getAlternateName()); // "sumith"
    console.log(response.getAddresses()); // {....}
    console.log(response.getEmailId()); // example@domain.com
    console.log(response.getCountryDetails()); // {...}
  } catch (error) {
    console.error("Error occurred:", error);
  }
}


