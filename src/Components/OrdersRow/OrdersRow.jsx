import { AiFillCloseCircle } from "react-icons/ai";

const OrdersRow = ({ order }) => {
    const { img, service_name, service_bill, } = order;
    console.log(order);
    return (
        <tr>
            <td>
                <button ><AiFillCloseCircle size={22}></AiFillCloseCircle></button>
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrdersRow;