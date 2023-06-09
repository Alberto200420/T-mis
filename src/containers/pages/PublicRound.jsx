import InfoSmartContract from "components/InfoContract"
import Navbar from "components/Navbar"
import Layout from "hocs/layouts/Layout"
import BotonFirmar from "components/BotonFirmar"
import { useLocation, Navigate } from "react-router-dom"

function PublicPage() {
    const location = useLocation()
    const datos = location.state
    if(!datos) {
        return <Navigate to={'/'}/>
    }
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <div className="text-center">
                    <div className="inline-flex rounded-sm px-8">
                        <img className="rounded-md w-24" alt="personal" src={ datos[0].personalFile }/>
                    </div>
                    <div className="inline-flex rounded-sm px-8">
                        <img className="rounded-md w-24" alt="logo" src={ datos[0].logo }/>
                    </div>
                    <BotonFirmar address={datos[0].contractAddress} network={datos[0].network}/>
                </div>
                <InfoSmartContract/>
            </div>
        </Layout>
    )
}

export default PublicPage