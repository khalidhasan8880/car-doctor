const ServiceCard = ({service}) => {
    // const {title} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-3 pt-3">
                <img src="{img}" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"></h2>
                <div className="card-actions">
                    <p>Price : {service}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;