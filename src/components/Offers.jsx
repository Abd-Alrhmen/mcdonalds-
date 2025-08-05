import PromoCard from './PromoCard.jsx';
import buyOne from '../assets/breakfast.png';
import happyMeal from '../assets/Happy-Meal.png';
import breakFast from '../assets/breakfast.png';




function Offers () {
    return (
        <div id="offers" className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center text-red-700 mb-8">Today's Offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PromoCard 
                        title="Buy 1 Get 1"
                        image={buyOne}
                        tag="bogo"
                    />
                    <PromoCard 
                        title="Happy Meal"
                        image={happyMeal}
                        tag="Happy Meal"
                    />
                    <PromoCard 
                        title="Breakfast Offers"
                        image={breakFast}
                        tag="breakfast"
                    />
                </div>
            </div>
        </div>
    );
}
export default Offers;