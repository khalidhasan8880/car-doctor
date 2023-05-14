import { AiFillCloseCircle } from "react-icons/ai";

const OrdersRow = ({ order, deleteHandler, orderConfirmHandler }) => {
    const { _id, img, service_name, service_bill, status } = order;


    return (
        <tr>
            <td>
                <button onClick={() => deleteHandler(_id)} ><AiFillCloseCircle size={22}></AiFillCloseCircle></button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="rounded-2xl w-24">
                        {
                            img ?
                                <img src={img} />
                                :
                                <p>No Image Available</p>
                        }
                    </div>
                    <div>
                        <div className="font-bold">{service_name}</div>
                    </div>
                </div>
            </td>
            <td>
                <h5 className="font-bold">{service_bill}</h5>
            </td>
            <td>{order?.date}</td>
            <th>
                {
                    status? 
                    <span className="font-bold text-warning">Confirmed</span>
                    :
                    <button onClick={() => orderConfirmHandler(_id)} className="btn text-bold btn-xs">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default OrdersRow;