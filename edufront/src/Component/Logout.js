import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    localStorage.clear();
  
    // eslint-disable-next-line no-undef
    dispatch(logout());
    navigate('/')
}