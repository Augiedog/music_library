import { useNavigate } from "react-router-dom"

function NavButtons() {
    const navigate = useNavigate()
        return (
            <>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate('/')}>Home</button>
            </>
        )
}
export default NavButtons