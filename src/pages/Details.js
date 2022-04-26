import { useParams, useNavigate } from "react-router-dom";
import BackSvg from "../assets/BackSvg";
import { Link } from "react-router-dom";

const Details = () => {
  
  const { id } = useParams();

  const navigate = useNavigate();
 
  return (
    <div>      
      <div className="dashboard-header">
      <BackSvg style={{width:"40px"}} onClick={() => navigate(-1)}/>
      <h1> ─── Details ───</h1>
      </div>
      <h1>detaylar{id}</h1>
      <div><Link to={-1}> Go Back </Link></div>
    </div>
  )
}

export default Details