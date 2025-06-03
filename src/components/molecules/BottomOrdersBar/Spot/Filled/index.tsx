import React, {memo} from "react";
import {format} from "date-fns";

import {SPOT_ALL_ORDERS, interruptionRef, SPOT_ORDER_STATUS} from "utils";
import {useSimulatorTradingChartDetailsContext} from "layouts/providers";

import SideType from "../componnets/SideType";
import {FlexibleTable} from "components";

const Filled: React.FC = () => {
    const {
        limitOrders,
        marketOrders,
        stopLimitOrders,
    } = useSimulatorTradingChartDetailsContext()

    const filledStopData = stopLimitOrders.filter(order => order.status === SPOT_ORDER_STATUS.FILLED)
    const filledMarketData = marketOrders.filter(order => order.status === SPOT_ORDER_STATUS.FILLED)
    const filledLimitData = limitOrders.filter(order => order.status === SPOT_ORDER_STATUS.FILLED)

    const convertedData = () => {
        const data = interruptionRef([...filledMarketData, ...filledLimitData, ...filledStopData])

        return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(order => {
            const {date, side, color} = order

            order.date = format(date, "yyyy-MMM-dd hh:mm:ss")
            order.side = <SideType value={side} color={color}/>

            return order
        })
    }

    return <FlexibleTable
        isPadding={true}
        header={SPOT_ALL_ORDERS}
        body={convertedData()}
    />
}

export default memo(Filled)