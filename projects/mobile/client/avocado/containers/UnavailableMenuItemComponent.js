import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet, Image, Modal } from 'react-native';
import {Text, Icon} from 'react-native-elements';
import {addItemToCart} from '../actions/index';
import PropTypes from 'prop-types'
import constants from '../constants/constants'
import translate from "translatr";
import dictionary from '../translations/translations';
import DetailsComponent from './DetailsComponent'



class UnavailableMenuItemComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemsAmount: 1,
            price: this.props.price,
            modalVisible: false
        };
    };

    closeModal = () => {
        this.setState({
            modalVisible: false
        })
    };


    render(){
        let ingredients = this.props.ingredients.join(', ');


        return (
            <View style = {style.cardStyle}>
                <View style = {style.imageViewStyle}>
                    <Image
                        style={style.imageStyle}
                        source={{uri: this.props.image}}
                    />
                </View>
                <View style = {style.descriptionViewStyle}>

                    <Text style={style.title}>{this.props.mealName}</Text>
                    <View style = {style.ingredientsStyle}>
                        <Text style={{fontSize:12}}>{ingredients}</Text>
                    </View>
                    <Text
                        style={{fontSize:12}}
                        onPress={() => {
                            this.setState({
                                modalVisible: true
                            })
                        }}
                    >
                        Details...
                    </Text>
                </View>
                <View style={style.priceColumnStyle}>
                    <Icon
                        name="emoticon-sad"
                        type="material-community"
                        size={28}
                        color="#ddd"
                    />
                    <Text style={style.unavailableStyle}>Unavailable</Text>
                    <Text>{this.state.price}zł</Text>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({ modalVisible: false });
                    }}
                >
                    <View style={style.modalStyle}>
                        <View style={style.modalContentStyle}>
                            <DetailsComponent
                                mealId={this.props.mealId}
                                image={this.props.image}
                                mealName={this.props.mealName}
                                ingredients={this.props.ingredients}
                                price={this.props.price}
                                closeModal={this.closeModal}
                                estimatedTime={this.props.estimatedTime}
                                itemsAmount={this.state.itemsAmount}
                                whereOpened="ORDER"
                                details={this.props.details}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    language: state.i18nReducer.currentLanguage
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addItemToCart: addItemToCart
    }, dispatch)
};

const style = StyleSheet.create({
    imageViewStyle: {
        flex: 1.5,
        marginLeft: -14,
        marginTop: -5
    },
    cardStyle:{
        flexDirection: "row",
        alignItems: "stretch",
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 0,
        borderBottomColor: "#ddd",
        borderBottomWidth: 3,
        borderRightColor: "#ddd",
        borderRightWidth: 3,
        borderTopColor: "#ddd",
        borderTopWidth: 1,
        borderLeftColor: "#ddd",
        borderLeftWidth: 1,
        backgroundColor: "#fff",
        padding: 20
    },
    descriptionViewStyle:{
        flex: 3,
        flexDirection: "column",
        paddingRight: 8
    },
    imageStyle: {
        width:70,
        height: 70
    },
    ingredientsStyle: {
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 5
    },
    priceColumnStyle:{
        flex: 1,
        justifyContent: "flex-end"
    },
    amountColumnStyle:{
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: -10
    },
    title: {
        fontSize: 16
    },
    amountCounterStyle: {
        backgroundColor: constants.colors.lightGrey,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    amountCounterText:{
        fontSize: 12,
        color: constants.colors.darkGrey
    },
    counterRowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:18
    },
    amountPlusStyle: {
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: constants.colors.green,
        borderRadius:100,
        fontSize:10,
        width:15,
        height:15
    },
    amountMinusStyle: {
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: constants.colors.green,
        borderRadius:100,
        fontSize:12,
        width:15,
        height:15
    },
    modalStyle: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalContentStyle: {
        flex: 1,
        marginTop: 25,
        marginBottom: 25,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: "#fff",

        alignItems: "center"
    },
    modalTitle: {
        fontSize: 20,
        marginTop: 25,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        textAlign: "center"
    },
    unavailableStyle: {
        fontSize: 10,
        color: "red",
        paddingTop: 5
    }

});

UnavailableMenuItemComponent.propTypes = {
    mealId: PropTypes.number,
    mealName: PropTypes.string,
    ingredients: PropTypes.array,
    price: PropTypes.number,
    image: PropTypes.string,
    estimatedTime: PropTypes.number,
    details: PropTypes.string
};


export default connect(mapStateToProps, mapDispatchToProps)(UnavailableMenuItemComponent);