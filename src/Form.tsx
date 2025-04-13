import {useState} from "react";

interface FormData{
    name: string;
    reason: string;
    level1: string;
    date: string;
    level2: string;
    details: string;
    urgent: boolean;
}

interface PropsForm{
    sendForm: (name: string, reason: string, level1: string, date: string, level2: string,
             details: string, urgent: boolean) => void;
}

function Form({sendForm}: PropsForm) {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        reason: "",
        level1: "",
        date: "",
        level2: "",
        details: "",
        urgent: false,
    });




    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value, type, checked} = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }


        function handleSubmit() {
            sendForm(formData.name.valueOf(), formData.reason.valueOf(), formData.level1.valueOf(),
                formData.date.valueOf(), formData.level2.valueOf(), formData.details.valueOf(), formData.urgent.valueOf());

        }

        return (
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Imie:</td>
                        <td>
                            <label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Wybierz powód wymówki:</td>
                        <td>
                            <label>
                                <select name="reason" value={formData.reason}
                                        onChange={handleChange}>
                                    <option value="">Wybierz</option>
                                    <option value="choroba">Zachorowałem/am</option>
                                    <option value="lekarz">Byłem/am u lekarza</option>
                                    <option value="rodzinka">Rodzinne sprawy</option>
                                    <option value="komunikacja">Opóźnienie komunikacji miejskiej</option>
                                </select>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td> Wybierz poziom wiarygodności wymówki (1-10):</td>
                        <td>
                            <label>
                                <input
                                    type="range" name="level1"
                                    min="1" max="10" value={formData.level1}
                                    onChange={handleChange}/>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td> Jaka jest data wymówki?</td>
                        <td>
                            <label>
                                <input
                                    type="date" name="date"
                                    value={formData.date} onChange={handleChange}/>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td> Wybierz poziom kreatywności wymówki (1-10):</td>
                        <td>
                            <label>
                                <input
                                    type="range" name="level2"
                                    min="1" max="10" value={formData.level2}
                                    onChange={handleChange}/>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td> Podaj dodatkowe szczegóły:</td>
                        <td>
                            <label>
                                <textarea name="details" value={formData.details}
                              onChange={handleChange}/>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>  Czy twoja wymówka jest pilna?</td>
                        <td>
                            <label>
                                <input type="checkbox" name="urgent"
                                       checked={formData.urgent} onChange={handleChange}/>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit">
                                Wyślij wymówkę
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        );
    }

export default Form;