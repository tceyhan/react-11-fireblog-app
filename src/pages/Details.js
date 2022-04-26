import { useParams, useNavigate } from "react-router-dom";
import BackSvg from "../assets/BackSvg";

const Details = () => {

 const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
 
  return (
    <div>      
      <div className="dashboard-header">
      <BackSvg style={{width:"40px"}} onClick={() => navigate(-1)}/>
      <h1> ─── Details ───</h1>
      </div>
      <h1>detaylar{id}</h1>    

    </div>
  )
}

export default Details