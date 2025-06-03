import React, {useState, memo, useEffect} from "react";

import {
    useSimulatorOptionsContext,
    useSimulatorTradingContext,
    useSimulatorPlayerInfoContext,
    useStopOrderLimitModalContext,
    useSimulatorTradingChartDetailsContext, useSimulatorToolsContext
} from "layouts/providers";
import {divide, ERROR, multiply, showNotification} from "utils";

import {Input, InputRange, InputRangeSlider} from "components";
import TradeButton from "../TradeButton";

import {ProcessT} from "layouts/providers/type";

const StopLimit: React.FC = () => {
    const {setCurrentModal, setDataForModal} = useStopOrderLimitModalContext()
    const {balanceUSDT, balanceTradeableCrypto} = useSimulatorPlayerInfoContext()
    const {currentCryptoData} = useSimulatorTradingChartDetailsContext()
    const {cryptoType} = useSimulatorOptionsContext()
    const {process} = useSimulatorTradingContext()
    const {setIsPlay} = useSimulatorToolsContext()

    const [limitUSDT, setLimitUSDT] = useState<number | string>("")
    const [stopUSDT, setStopUSDT] = useState("")
    const [quantityCrypto, setQuantityCrypto] = useState("")
    const [totalPrice, setTotalPrice] = useState("")
    const [percent, setPercent] = useState(0)

    const currentBalance = process === "buy" ? balanceUSDT : balanceTradeableCrypto

    useEffect(() => {
        if (!limitUSDT) {
            setLimitUSDT(Number(currentCryptoData?.close))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentCryptoData]);

    useEffect(() => {
        setPercent(0)
        setTotalPrice("")
        setQuantityCrypto("")
    }, [process]);

    const limitUSDTHandle = (limit: string) => {
        setPercent(0)
        setLimitUSDT(limit)

        if (quantityCrypto) {
            setTotalPrice(multiply(quantityCrypto, limit).toString())
        }
    }

    const totalUSDTHandle = (price: string) => {
        let calculatedPercent: number
        const quantityPrice = divide(price, limitUSDT)

        if (process === "sell") {
            if (balanceTradeableCrypto) calculatedPercent = Number(divide(multiply(quantityPrice, 100), balanceTradeableCrypto).toFixed(1))
        } else {
            if (balanceUSDT) calculatedPercent = Number(divide(multiply(price, 100), currentBalance).toFixed(1))
        }

        setTotalPrice(price)
        setQuantityCrypto(quantityPrice === 0 ? "" : quantityPrice.toString())
        setPercent(calculatedPercent > 100 ? 100 : calculatedPercent)
    }

    const rangeHandle = (percent: number) => {
        const calculatedPrice = divide(multiply(currentBalance, percent), 100)
        const currentPrice = Number(calculatedPrice) === 0 ? "" : calculatedPrice.toString()
        const totalPrice = multiply(calculatedPrice, limitUSDT).toString()
        const quantityCrypto = divide(currentPrice, limitUSDT).toString()

        setPercent(percent)

        if (process === "sell") {
            setQuantityCrypto(calculatedPrice.toString())
            setTotalPrice(totalPrice)
        } else {
            setTotalPrice(currentPrice)
            setQuantityCrypto(quantityCrypto)
        }

        if (Number(percent) === 0 || Number(calculatedPrice) === 0 || Number(totalPrice) === 0) {
            setTotalPrice("")
            setQuantityCrypto("")
        }
    }

    const quantityHandle = (quantity: string) => {
        let calculatedPercent: number = 0
        const totalPrice = multiply(quantity, limitUSDT)

        if (process === "sell") {
            if (balanceTradeableCrypto) calculatedPercent = Number(divide(multiply(quantity, 100), balanceTradeableCrypto).toFixed(1))
        } else {
            if (balanceUSDT) calculatedPercent = Number(divide(multiply(multiply(quantity, limitUSDT), 100), balanceUSDT).toFixed(1))
        }

        setQuantityCrypto(quantity)
        setPercent(calculatedPercent > 100 ? 100 : calculatedPercent)
        setTotalPrice(totalPrice === 0 ? "" : totalPrice.toString())
    }

    const tradeInLimitOrder = (side: ProcessT) => {
        const Influence = Number(stopUSDT) > Number(currentCryptoData.close) ? "up" : "down"
        const percentOfCrypto = currentCryptoData.close * 15 / 100

        if ((Influence === "up" && stopUSDT < limitUSDT && (Number(stopUSDT) - currentCryptoData.close > percentOfCrypto))
            || (Influence === "down" && stopUSDT > limitUSDT && (currentCryptoData.close - Number(stopUSDT) > percentOfCrypto))) {
            showNotification(ERROR.INSUFFICIENT_INTERVAL, "error", 0)
            return
        }

        if (side === "buy" && Number(totalPrice) > currentBalance) {
            showNotification(ERROR.INSUFFICIENT, "error", 0)
            return
        }

        if (side === "sell" && Number(quantityCrypto) > currentBalance) {
            showNotification(ERROR.INSUFFICIENT, "error", 0)
            return;
        }

        setDataForModal({
            symbol: cryptoType,
            side: side === "sell" ? "Sell" : "Buy",
            type: "Stop",
            quantity: Number(quantityCrypto),
            price: 0,
            limit_price: Number(limitUSDT),
            stop_price: Number(stopUSDT),
            last: 0,
            status: "Working",
            order_id: null,
            date: null,
            influence: Influence,
            total: 0,
            fee: 0.00001,
            isActive: false,
        })

        setPercent(0)
        setIsPlay(false)
        setTotalPrice("")
        setQuantityCrypto("")
        setCurrentModal("order-confirm")
    }

    return (
        <div className="spot_stop-limit">
            <Input
                name="stop"
                type="number"
                value={stopUSDT}
                labelText="Trigger Price"
                onChange={(e) => setStopUSDT(e.target.value)}
            />
            <Input
                name="limit"
                type="number"
                rightText="USDT"
                value={limitUSDT}
                labelText="Order Price"
                onChange={(e) => limitUSDTHandle(e.target.value)}
            />
            <Input
                type="number"
                name="quantity"
                labelText="Qty"
                value={quantityCrypto}
                rightText={cryptoType}
                onChange={(e) => quantityHandle(e.target.value)}
            />
            <InputRangeSlider
                name=""
                max={100}
                division={4}
                value={percent}
                onChange={(e) => rangeHandle(e.target.value as any)}
                disabled={!limitUSDT || (process === "sell" ? !balanceTradeableCrypto : !balanceUSDT)}
            />
            <Input
                name="total"
                type="number"
                rightText="USDT"
                value={totalPrice}
                labelText="Order Value"
                onChange={(e) => totalUSDTHandle(e.target.value)}
            />
            <TradeButton disabled={!limitUSDT || !quantityCrypto || !totalPrice} onClick={tradeInLimitOrder}/>
        </div>
    )
}

export default memo(StopLimit)