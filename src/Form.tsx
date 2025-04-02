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

function Form() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        reason: "",
        level1: "",
        date: "",
        level2: "",
        details: "",
        urgent: false,
    });


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Imie:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
            </label>
            <label>
                Wybierz powód wymówki:
                <select name="reason" value={formData.reason}
                        onChange={handleChange}>
                    <option value="">Wybierz</option>
                    <option value="choroba">Zachorowałem/am</option>
                    <option value="lekarz">Byłem/am u lekarza</option>
                    <option value="rodzinka">Rodzinne sprawy</option>
                    <option value="komunikacja">Opóźnienie komunikacji miejskiej</option>
                </select>
            </label>
            <label>
                Wybierz poziom wiarygodności wymówki (1-10):
                <input
                    type="range" name="level1"
                    min="1" max="10" value={formData.level1}
                    onChange={handleChange} />
            </label>
            <label>
                Jaka jest data wymówki?
                <input
                    type="date" name="date"
                    value={formData.date} onChange={handleChange} />
            </label>
            <label>
                Wybierz poziom kreatywności wymówki (1-10):
                <input
                    type="range" name="level2"
                    min="1" max="10" value={formData.level2}
                    onChange={handleChange} />
            </label>
            <label>
                Podaj dodatkowe szczegóły:
                <textarea name="details" value={formData.details}
                          onChange={handleChange} />
            </label>
            <label>
                Czy twoja wymówka jest pilna?
                <input type="checkbox" name="urgent"
                       checked={formData.urgent} onChange={handleChange} />
            </label>
            <button type="submit" >
                Wyślij wymówkę
            </button>
        </form>
    );
}

export default Form;