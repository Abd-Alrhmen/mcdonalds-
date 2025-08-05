import { Link } from "react-router-dom";

function PromoCard ({ title, image, tag }) {
    return (
        <div className="bg-white rounded-xl shadow-md text-center hover:scale-105 transition cursor-pointer overflow-hidden">
            <Link to={`/home/${tag}`}>
                <div className="bg-yellow-400 h-40 flex items-center justify-center">
                    <img 
                        src={image}
                        alt={title}
                        className="max-h-full max-w-full object-contain"
                        />
                </div>
                <div className="py-4">
                    <h3 className="text-lg font-semibold text-red-700">{title}</h3>
                </div>
            </Link>
        </div>
    )
}
export default PromoCard ;