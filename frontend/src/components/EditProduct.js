import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditProduct = () => {
    const [place, setPlace] = useState('');
    const [days, setDays] = useState('');
    const [packages, setPackages] = useState('');
    const [covid_restrictions, setCovid_restrictions] = useState('');
    const [temperature, setTemperature] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/v1/tourism/${id}`,{
            place: place,
            days:days,
            package:packages,
            covid_restrictions:covid_restrictions,
            temperature:temperature
        });
        navigate("/");
    }
 
    useEffect(() => {
        getProductById();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
 
    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/api/v1/tourism/${id}`);
        setPlace(response.data.place);
        setDays(response.data.days);
        setPackages(response.data.packages);
        setCovid_restrictions(response.data.covid_restrictions);
        setTemperature(response.data.temperature);

    }
 
    return (
        <div>
            <form onSubmit={ updateProduct }>
 
                <div className="field">
                    <label className="label">PLACE</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Place"
                        value={ place }
                        onChange={ (e) => setPlace(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">DAYS</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="days"
                        value={ days }
                        onChange={ (e) => setDays(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">PACKAGES</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="packages"
                        value={ packages }
                        onChange={ (e) => setPackages(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">COVID_RESTRICTIONS</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="covid_restrictions"
                        value={ covid_restrictions }
                        onChange={ (e) => setCovid_restrictions(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">TEMPERATURE</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="temperature"
                        value={ temperature }
                        onChange={ (e) => setTemperature(e.target.value) }
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditProduct

