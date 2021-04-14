import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { connect } from 'react-redux';

const PaymentSchedule = (props) => {
    const columns = [
        {
            title: '№',
            dataIndex: 'number',
            key: 'name',
        },
        {
            title: 'Дата платежа',
            dataIndex: 'dateOfPay',
            key: 'dateOfPay',
        },
        {
            title: 'Задолженность',
            dataIndex: 'Debt',
            key: 'Debt',
        },
        {
            title: 'Погашение процентов',
            dataIndex: 'Interestrepayment',
            key: 'Interestrepayment',
        },
        {
            title: 'Погашение основного долга',
            dataIndex: 'Repaymentoftheprincipaldebt',
            key: 'Repaymentoftheprincipaldebt',
        },
        {
            title: 'Сумма платежа',
            dataIndex: 'Amountofpayment',
            key: 'Amountofpayment',
        }
    ];

    const data = [
        {
            key: '1',
            number: '1',
            dateOfPay: '11.11.11',
            Debt: '12345P',
            Interestrepayment: '2332P',
            Repaymentoftheprincipaldebt: '2312313P',
            Amountofpayment: '2131232P'


        }
    ];

    return (<Table columns={columns} scroll={{ y: 300 }} pagination = {false} dataSource={props.Tabledata} />)

}

const mapStateToProps = (state) => ({
    Tabledata: state.TablePage.Tabledata
})


export default connect(mapStateToProps, {})(PaymentSchedule);

