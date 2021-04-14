import React, { useEffect } from 'react';
import './calculator.css';
import Slider from '@material-ui/core/Slider';
import { makeStyles, TableContainer } from '@material-ui/core';
import { connect } from 'react-redux';
import { setPropertyValue } from '../redux/Property-reducer';
import { useState } from 'react';
import { setEnitialFeeValue } from '../redux/EnitialFee-reducer';
import { setYearsValue } from '../redux/YearsValue-reducer';
import { setPercentValue } from '../redux/Percent-reducer';
import { setTableValue } from '../redux/table-reducer';

const PropertySlider = (props) => {

    const useStyles = makeStyles({
        root: {
            padding: '0',
            margin: '0 0 16px 0',
        },
        rail: {
            background: 'none'
        }

    });

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        if (newValue - 500000 <= props.EnitialFeeValue) {
            props.setEnitialFeeValue(newValue - 500000)
        } if (newValue == 500000) {
            props.setEnitialFeeValue('0')
        }
        props.setPropertyValue(newValue)
    };
    return (
        <div>
            <Slider
                value={props.PropertyValue}
                min={500000}
                step={100000}
                classes={classes}
                max={99999999}
                onChange={handleChange}
                aria-labelledby="non-linear-slider"
            />
        </div>
    );
}
const EnitialFeeSlider = (props) => {

    const useStyles = makeStyles({
        root: {
            padding: '0',
            margin: '0 0 16px 0',
        },
        rail: {
            background: 'none'
        }

    });

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        props.setEnitialFeeValue(newValue)
        if (newValue == 0) {
            props.setEnitialFeeValue('0')
        }
    };
    return (
        <div>
            <Slider
                value={props.EnitialFeeValue}
                min={0}
                step={Math.round(props.PropertyValue / 100)}
                classes={classes}
                max={props.PropertyValue - 500000}
                onChange={handleChange}
                aria-labelledby="non-linear-slider"
            />
        </div>
    );
}
const YearsSlider = (props) => {

    const useStyles = makeStyles({
        root: {
            padding: '0',
            margin: '0 0 16px 0',
        },
        rail: {
            background: 'none'
        }

    });

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        props.setYearsValue(newValue)
    };
    return (
        <div>
            <Slider
                value={props.YearsValue}
                min={1}
                step={1}
                classes={classes}
                max={30}
                onChange={handleChange}
                aria-labelledby="non-linear-slider"
            />
        </div>
    );
}
const PercentSlider = (props) => {

    const useStyles = makeStyles({
        root: {
            padding: '0',
            margin: '0 0 16px 0',
        },
        rail: {
            background: 'none'
        }

    });

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        props.setPercentValue(newValue)
    };
    return (
        <div>
            <Slider
                value={props.PercentValue}
                min={1}
                step={0.1}
                classes={classes}
                max={30}
                onChange={handleChange}
                aria-labelledby="non-linear-slider"
            />
        </div>
    );
}






const Calculator = (props) => {

    let YearsValue;
    let PercentValue;
    if (props.YearsValue == '') {
        YearsValue = 1;
    } else if (props.YearsValue > 30) {
        YearsValue = 30;
    } else {
        YearsValue = props.YearsValue
    }

    if (props.PercentValue == '') {
        PercentValue = 1;
    } else if (props.PercentValue > 30) {
        PercentValue = 30;
    } else {
        PercentValue = props.PercentValue
    }

    let monthlyRate = (PercentValue / 12 / 100)

    let generalRate = Math.pow((1 + monthlyRate), (YearsValue * 12))

    let monthlPpayment = (((props.PropertyValue - props.EnitialFeeValue) * (monthlyRate) * (generalRate)) / (generalRate - 1))

    let percentage = (((YearsValue * 12) * monthlPpayment) - (props.PropertyValue - props.EnitialFeeValue))


    let ChangePropertyValue = (number) => {
        if (number.currentTarget.value < props.EnitialFeeValue) {
            if (number.currentTarget.value - 500000 > 0) {
                props.setEnitialFeeValue(number.currentTarget.value - 500000)
            }
        }
        if (number.currentTarget.value <= 500000) {
            props.setEnitialFeeValue('0')
        }
        props.setPropertyValue(number.currentTarget.value)

    }

    let chekPropertyValue = () => {
        if (props.PropertyValue <= 500000) {
            props.setPropertyValue(500000)
        }
    }



    let ChangeEnitialValue = (number) => {
        if (props.PropertyValue <= 500000) {
            props.setEnitialFeeValue('0')
        } else if (number.currentTarget.value >= props.PropertyValue) {
            props.setEnitialFeeValue((props.PropertyValue - 500000))
        } else {
            props.setEnitialFeeValue(number.currentTarget.value)
        }
    }

    let chekEnitialValue = () => {
        if (props.EnitialFeeValue < 1) {
            props.setEnitialFeeValue('0')
        }

    }

    let ChangeYearsValue = (number) => {
        props.setYearsValue(number.currentTarget.value)
    }
    let chekYearsValue = () => {
        if (props.YearsValue > 30) {
            props.setYearsValue(30)
        } else if (props.YearsValue < 1) {
            props.setYearsValue(1)
        }

    }

    let setYearsValueWithoutButton = (value) => {
        props.setYearsValue(value.currentTarget.value)

    }




    let setEnitialFeeValueWithoutButton = (value) => {
        if (value.currentTarget.value === '0') {
            props.setEnitialFeeValue('0')
        } else if (props.PropertyValue - props.PropertyValue * value.currentTarget.value >= 500000) {
            props.setEnitialFeeValue(props.PropertyValue * value.currentTarget.value)
        }

    }

    let ChangePercentValue = (value) => {
        props.setPercentValue(value.currentTarget.value)
    }
    let chekPercentValue = () => {
        if (props.PercentValue > 30) {
            props.setPercentValue(30)
        } else if (props.PercentValue < 1) {
            props.setPercentValue(1)
        }
    }
    let setPercentValueWithoutButton = (value) => {
        props.setPercentValue(value.currentTarget.value)

    }


    let TableObject = [];

    let year = 2021;
    let month = 4;
    let day = 13;
    


    useEffect(() => {
        let indebtedness = (props.PropertyValue - props.EnitialFeeValue) - Math.round(monthlPpayment);
        let date = new Date(year, month, day)
        for (let i = 1; i <= props.YearsValue * 12; i++) {
            
            if(indebtedness > 0){
                TableObject.push({
                    key: i,
                    number: i,
                    dateOfPay:date ,
                    Amountofpayment: Math.round(monthlPpayment),
                    Debt: indebtedness
                })
                indebtedness = indebtedness - Math.round(monthlPpayment)
            }else {
                TableObject.push({
                    key: i,
                    number: i,
                    Amountofpayment: Math.round(monthlPpayment),
                    Debt: 0
                })
            }
            
              
            
        }
        props.setTableValue(TableObject)
        
    }, [props.YearsValue, monthlPpayment])



    return (
        <div className='calculator-container'>

            <div className='leftPage'>
                <div>Стоимость недвижимости</div>
                <div className='Property_value input'>
                    <input className='input-style' value={props.PropertyValue} onBlur={chekPropertyValue} type='number' onChange={ChangePropertyValue} />


                    <PropertySlider PropertyValue={props.PropertyValue} EnitialFeeValue={props.EnitialFeeValue} setEnitialFeeValue={props.setEnitialFeeValue} setPropertyValue={props.setPropertyValue} />


                </div>
                <div>Первоначальный взнос</div>
                <div className='An_initial_fee'>
                    <input className='input-style' type='number' onBlur={chekEnitialValue} value={props.EnitialFeeValue} onChange={ChangeEnitialValue} />
                    <EnitialFeeSlider PropertyValue={props.PropertyValue} EnitialFeeValue={props.EnitialFeeValue} setEnitialFeeValue={props.setEnitialFeeValue} />

                </div>
                <div className='button-click'>
                    <button className='button_style' value={0} onClick={setEnitialFeeValueWithoutButton}>
                        0%

                    </button>
                    <button className='button_style' value={0.10} onClick={setEnitialFeeValueWithoutButton}>
                        10%

                    </button>
                    <button className='button_style' value={0.15} onClick={setEnitialFeeValueWithoutButton}>
                        15%

                    </button>
                    <button className='button_style' value={0.20} onClick={setEnitialFeeValueWithoutButton}>
                        20%

                    </button>
                    <button className='button_style' value={0.25} onClick={setEnitialFeeValueWithoutButton}>
                        25%

                    </button>
                    <button className='button_style' value={0.30} onClick={setEnitialFeeValueWithoutButton}>
                        30%

                    </button>


                </div>
                <div>Срок кредита</div>
                <div className='Credit_term input'>
                    <input className='input-style' value={props.YearsValue} onBlur={chekYearsValue} type='number' onChange={ChangeYearsValue} />
                    <YearsSlider YearsValue={props.YearsValue} setYearsValue={props.setYearsValue} />
                </div>
                <div className='button-click'>
                    <button className='button_style' value={5} onClick={setYearsValueWithoutButton}>
                        5 лет

                    </button>
                    <button className='button_style' value={10} onClick={setYearsValueWithoutButton}>
                        10 лет

                    </button>
                    <button className='button_style' value={15} onClick={setYearsValueWithoutButton}>
                        15 лет

                    </button>
                    <button className='button_style' value={20} onClick={setYearsValueWithoutButton}>
                        20 лет

                    </button>
                </div>
                <div>Процентная ставка</div>
                <div className='Interest_rate input'>
                    <input className='input-style' value={Number.isInteger(props.PercentValue * 100) ? props.PercentValue : (props.PercentValue).toFixed(2)} type='number' onBlur={chekPercentValue} onChange={ChangePercentValue} />
                    <PercentSlider PercentValue={props.PercentValue} setPercentValue={props.setPercentValue} />
                </div>
                <div className='button-click'>
                    <button className='button_style' value={4.5} onClick={setPercentValueWithoutButton}>
                        4.5%

                    </button>
                    <button className='button_style' value={6} onClick={setPercentValueWithoutButton}>
                        6%

                    </button>
                    <button className='button_style' value={7.5} onClick={setPercentValueWithoutButton}>
                        7.5%

                    </button>
                    <button className='button_style' value={9} onClick={setPercentValueWithoutButton}>
                        9%

                    </button>
                    <button className='button_style' value={10} onClick={setPercentValueWithoutButton}>
                        10%

                    </button>
                </div>

            </div>
            <div className='rightPage'>
                <div className='header'>
                    <div className='header-text'>
                        Ваш ежемесячный платеж
                    </div>
                    <div className='value-rubles'>
                        <div className='header-value'>
                            {Math.round(monthlPpayment)}
                        </div>
                        <div className='header-rubles'>₽</div>

                    </div>


                </div>
                <div className='footer'>

                    <div className='credit-info'>
                        <div className='name'>
                            Кредит

                        </div>
                        <div className='value'>
                            {props.PropertyValue >= 500000 ? props.PropertyValue - props.EnitialFeeValue : 500000}
                            <div className='rubles'>₽</div>
                        </div>


                    </div>
                    <div className='credit-info'>
                        <div className='name'>
                            Проценты
                        </div>
                        <div className='value'>
                            {(Math.round(percentage))}
                            <div className='rubles'>₽</div>
                        </div>


                    </div>
                    <div className='credit-info'>
                        <div className='name'>
                            Проценты + Кредит
                        </div>
                        <div className='value'>
                            {Math.round(percentage) + (props.PropertyValue - props.EnitialFeeValue)}
                            <div className='rubles'>₽</div>
                        </div>


                    </div>
                    <div className='credit-info'>
                        <div className='name'>
                            Необходимый доход
                        </div>
                        <div className='value'>
                            {Math.round(monthlPpayment / 60 * 100)}
                            <div className='rubles'>₽</div>
                        </div>


                    </div>

                </div>

            </div>
        </div>

    )


}

const mapStateToProps = (state) => ({
    PropertyValue: state.PropertyPage.PropertyValue,
    EnitialFeeValue: state.EnitialFeePage.EnitialFeeValue,
    YearsValue: state.YearsPage.YearsValue,
    PercentValue: state.PercentPage.PercentValue

})

export default connect(mapStateToProps, { setPropertyValue, setEnitialFeeValue, setYearsValue, setPercentValue, setTableValue })(Calculator);



