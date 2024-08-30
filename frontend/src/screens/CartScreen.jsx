import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";

import { FaTrash } from "react-icons/fa";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return <div>Cart screen</div>;
};

export default CartScreen;
