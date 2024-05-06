
import { useCryptoStore } from "../store"
import Spinner from "./Spinner/Spinner"

export default function CryptoPriceDisplay() {

    const {result, loading} = useCryptoStore()
   
  return (
    <div className="result-wrapper">
        {loading ? <Spinner/> : result.PRICE && (
            <>
                <h2>Cotización</h2>
        <div className="result">
            <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen criptomoneda" />
            <div>
                <p>El precio es de: <span>{result.PRICE}</span></p>
                <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                <p>Ultima actualización: <span>{result.LASTUPDATE === 'Just now' ? 'Justo ahora': result.LASTUPDATE}</span></p>
            </div>
        </div>
            </>
        )}
        
    </div>
  )
}
