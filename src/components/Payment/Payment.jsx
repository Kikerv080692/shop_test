import { Navigate, useLocation, useNavigate} from "react-router-dom";
import {PAGES_SLUGS} from "@/constants/pages.js";

const Payment = () => {
    const location = useLocation()
    const navigate = useNavigate()

    if(!location.state && !location.state.data){
        return <Navigate to={PAGES_SLUGS.home} replace={false}/>
    }

    return (
        <section>
            <h2>Дякую за покупку</h2>
            <div>
                <p> Ваше замовлення </p>
                <img src={location.state.data[0].img} className="list__item-image" alt={location.state.data[0].name}/>
                <h2 className='list__item-name'>{location.state.data[0].name}</h2>
                <span className='list__item-art'><strong>Код:</strong> {location.state.data[0].art}</span>
                <span className='list__item-quentity'><strong>Кількість обраного товару:</strong> {location.state.data[0].quantity}</span>
                <p className='list__item-price'><strong>Ціна:</strong> {location.state.data[0].price}</p>
                <p className='list__item-color'><strong>Колір:</strong> {location.state.data[0].color}</p>
            </div>
            <button onClick={() => navigate(PAGES_SLUGS.home)}>На головну</button>
        </section>
    )
}

export default Payment