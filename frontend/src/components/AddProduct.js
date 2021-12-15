import { useState } from 'react'
import axios from "axios";
import { useNavigate} from 'react-router-dom';
const AddProduct = () => {
    const [place, setPlace] = useState('');
    const [days, setDays] = useState('');
    const [packages, setPackages] = useState('');
    const [covid_restrictions, setCovid_restrictions] = useState('');
    const [temperature, setTemperature] = useState('');
    const navigate = useNavigate();
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/v1/tourism',{
          place: place,
          days:days,
          package:packages,
          covid_restrictions:covid_restrictions,
          temperature:temperature
        });
        navigate("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveProduct }>
 
                <div className="field">
                    <label className="label">PLACE</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="place"
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
                    <label className="label">PACKAGE</label>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddProduct
