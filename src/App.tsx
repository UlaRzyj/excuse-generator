import './Form.css'
import Form from "./Form.tsx";
import Storage from "./Storage.tsx";
import {useState} from "react";

interface FormDataProps {
    name: string;
    reason: string;
    level1: string;
    date: string;
    level2: string;
    details: string;
    urgent: boolean;
}
function App() {

    const [data, setData] = useState<FormDataProps>({
        name: "",
        reason: "",
        level1: "",
        date: "",
        level2: "",
        details: "",
        urgent: false,
    });


    function getData(name: string, reason: string, level1: string, date: string, level2: string,
                     details: string, urgent: boolean){
        console.log("Przesłane");
        setData({name, reason, level1, date, level2, details, urgent});
    }

  return (
    <>
        <Form sendForm={getData}/>
        <Storage name={data.name}
                 reason={data.reason}
                 level1={data.level1}
                 date={data.date}
                 level2={data.level2}
                 details={data.details}
                 urgent={data.urgent}/>
    </>
  )
}

export default App
