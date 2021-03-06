import '../../../static/css/FoodImagesList.css'
import React from 'react';
import ImageCard from "./ImageCard";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getFoodItems} from "../../actions/foodItems";


export class FoodImagesList extends React.Component {
    static propTypes = {
        foodItems: PropTypes.array.isRequired,
    };

    componentDidMount() {
        this.props.getFoodItems();
    }


    render() {
        const images = this.props.foodItems.map((item) => {
            return <ImageCard key={item.id} item={item}/>
        });
        return (
            <>
                <div className="container">
                    <div className="jumbotron">
                        <div className="image-list">{images}</div>
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = state => ({
    foodItems: state.foodItems.foodItems,
});
// () - returns a function () - invoke a function
export default connect(mapStateToProps, {getFoodItems})(FoodImagesList);