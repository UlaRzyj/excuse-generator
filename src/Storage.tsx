import * as React from "react";
import {useEffect} from "react";

interface FormData{
    name: string;
    reason: string;
    level1: string;
    date: string;
    level2: string;
    details: string;
    urgent: boolean;
}


const Storage: React.FC<FormData> = ({name, reason, level1, date, level2, details, urgent})=>{

    const [itemList, setItemList] = React.useState<Array<string>>(()=>{
        const savedItems = localStorage.getItem("myItems");
        return savedItems ? JSON.parse(savedItems) : [];
    });

    useEffect(() => {
        if (name && reason) {
            let text = "";
            if (details.trim() == "") {
                details = "brak"
            }
            const urgentText = urgent ? "tak" : "nie";
            if(reason == "choroba") {
                text = `Panie Profesorze, niestety spóźniłem/am się, ponieważ dopadłą mnie poważna choroba, 
                a poziom wiarygodności tej wymówki to: ${level1}, zdarzenie miało miejsce (${date}), 
                kreatywność na poziomie: ${level2}, czy wymówka jest pilna: ${urgentText}. 
                Dodatkowe szczegóły: ${details}. Podpis - ${name}`;

            } else if(reason == "lekarz") {
                text = `Panie Profesorze, niestety spóźniłem/am się, ponieważ byłem/am na wizycie u lekarza, 
                a poziom wiarygodności tej wymówki to: ${level1}, zdarzenie miało miejsce (${date}), 
                kreatywność na poziomie: ${level2}, czy wymówka jest pilna: ${urgentText}. 
                Dodatkowe szczegóły: ${details}. Podpis - ${name}`;

            } else if(reason == "rodzinka") {
                text = `Panie Profesorze, niestety spóźniłem/am się z powodu ważnych spraw rodzinnych, 
                a poziom wiarygodności tej wymówki to: ${level1}, zdarzenie miało miejsce (${date}), 
                kreatywność na poziomie: ${level2}, czy wymówka jest pilna: ${urgentText}. 
                Dodatkowe szczegóły: ${details}. Podpis - ${name}`;

            } else if (reason == "komunikacja") {
                text = `Panie Profesorze, niestety spóźniłem/am się, ponieważ komunikacja miejska mnie zaskoczyła, 
                a poziom wiarygodności tej wymówki to: ${level1}, zdarzenie miało miejsce (${date}), 
                kreatywność na poziomie: ${level2}, czy wymówka jest pilna: ${urgentText}. 
                Dodatkowe szczegóły: ${details}. Podpis - ${name}`;

            }
            if (text.trim() !== "") {
                const updatedList: Array<string> = [...itemList, text];
                setItemList(updatedList);
                localStorage.setItem("myItems", JSON.stringify(updatedList));
            }
        }
    }, [name, reason, level1, date, level2, details, urgent]);

    function clearLocalStorage() {
        localStorage.removeItem("myItems");
        setItemList([]);
        alert("Wyczyściłeś liste wymówek");

    }

    return(
        <>
            <div>
                <h2>Lista wymówek:</h2>
                <div style={{ display: "inline-block" }}>
                    <button onClick={clearLocalStorage}
                            style={{ color: "white",
                                backgroundColor: "#4CAF50",
                                marginLeft: "10px",
                                marginBottom: "10px"}} >
                        Wyczyść liste
                    </button>
                </div>

                <ul style={{listStyleType: "none", textAlign: "left", padding: "0", margin: "0"}}>
                    {
                        itemList.map( item => <li key={item} style={{borderBottom: "1px solid #45a049", margin: "2px"}}> {item} </li>)
                    }
                </ul>
            </div>
        </>

    )
}

export default Storage