import {
    POSITION_HEADERS,
    PROFIT_LOSS_HEADERS,
    TRADE_HISTORY_HEADERS,
    CURRENT_ORDER_ACTIVE_HEADERS,
    ORDER_HISTORY_GLOBAL_HEADERS,
    CURRENT_ORDER_CONDITIONAL_HEADERS,
    ORDER_HISTORY_MARKET_LIMIT_HEADERS, CURRENT_ORDER_TP_SL_HEADERS, CURRENT_ORDER_TRAILING_STOP_HEADERS, CURRENT_ORDER_MMR_CLOSE_HEADERS
} from "utils";
import {MarginModeDataITF, OrderHistoryMarketLimitITF, PositionHeaderITF} from "./type";

// @TODO need to add info text
export const positionHeader: PositionHeaderITF[] = [
    {value: POSITION_HEADERS.CONTRACTS, displayName: "Contracts", isHoverInfo: false, info: ""},
    {value: POSITION_HEADERS.QUANTITY, displayName: "Qty", isHoverInfo: false, info: ""},
    {value: POSITION_HEADERS.VALUE, displayName: "Value", isHoverInfo: false, info: "", currency: "USDT", isFormat: true},
    {value: POSITION_HEADERS.ENTRY_PRICE, displayName: "Entry Price", isHoverInfo: true, info: "", isFormat: true},
    {value: POSITION_HEADERS.MARK_PRICE, displayName: "Mark Price", isHoverInfo: false, info: "", isFormat: true},
    {value: POSITION_HEADERS.LIQUIDITY_PRICE, displayName: "Liq. Price", isHoverInfo: true, info: "", className: "liquidity"},
    {value: POSITION_HEADERS.IM, displayName: "IM", isHoverInfo: true, info: "", currency: "USDT", isFormat: true, isFixed: 2},
    {value: POSITION_HEADERS.MM, displayName: "MM", isHoverInfo: true, info: "", currency: "USDT", isFormat: true, isFixed: 2},
    {value: POSITION_HEADERS.UNREALIZED_PL, displayName: "Unrealized P&L(%)", isHoverInfo: false, info: "", className: "realized"},
    {
        value: POSITION_HEADERS.REALIZED_PL,
        displayName: "Realized P&L",
        isHoverInfo: true,
        info: "",
        currency: "USDT",
        className: "realized",
        isFormat: true,
        isFixed: 2
    },
    {value: POSITION_HEADERS.TP_SL, displayName: "TP/SL", isHoverInfo: false, info: ""},
    {value: POSITION_HEADERS.TRAILING_STOP, displayName: "Trailing Stop", isHoverInfo: true, info: ""},
    {value: POSITION_HEADERS.MMR_CLOSE, displayName: "MMR Close", isHoverInfo: true, info: ""},
    {value: POSITION_HEADERS.REVERSE_POSITION, displayName: "Reverse Position", isHoverInfo: true, info: ""},
    {value: POSITION_HEADERS.CLOSE_BY, displayName: "Close By", isHoverInfo: false, info: ""},
]

export const ORDER_HISTORY_MARKET_LIMIT: OrderHistoryMarketLimitITF[] = [
    {value: ORDER_HISTORY_MARKET_LIMIT_HEADERS.CONTRACTS, displayName: "Contracts"},
    {value: ORDER_HISTORY_MARKET_LIMIT_HEADERS.FILLED_TOTAL, displayName: "File/Total"},
    {value: ORDER_HISTORY_MARKET_LIMIT_HEADERS.FILLED_PRICE_ORDER_PRICE, displayName: "Filled Price/Order Price"},
    {value: ORDER_HISTORY_MARKET_LIMIT_HEADERS.TRADE_TYPE, displayName: "Trade Type"},
    {value: ORDER_HISTORY_MARKET_LIMIT_HEADERS.ORDER_TYPE, displayName: "Order Type"},
    {value: ORDER_HISTORY_MARKET_LIMIT_HEADERS.STATUS, displayName: "Status"},
    {value: ORDER_HISTORY_MARKET_LIMIT_HEADERS.ORDER_NO, displayName: "Order No."},
    {value: ORDER_HISTORY_MARKET_LIMIT_HEADERS.ORDER_TIME, displayName: "Order Time"},
]

export const ORDER_HISTORY_CONDITIONAL = [
    {value: ORDER_HISTORY_GLOBAL_HEADERS.CONTRACTS, displayName: "Contracts"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.FILLED_ACTUAL_QTY, displayName: "Filled/Actual Qty"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.FILLED_PRICE_ORDER_PRICE, displayName: "Filled Price/Order Price"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.TRIGGER_PRICE, displayName: "Trigger Price"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.TRADE_TYPE, displayName: "Trade Type"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.STATUS, displayName: "Status"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.ORDER_NO, displayName: "Order No."},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.ORDER_TIME, displayName: "Order Time"},
]

export const ORDER_HISTORY_TP_SL = [
    {value: ORDER_HISTORY_GLOBAL_HEADERS.CONTRACTS, displayName: "Contracts"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.FILLED_ACTUAL_QTY, displayName: "Filled/Actual Qty"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.TRIGGER_PRICE, displayName: "Trigger Price"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.FILLED_PRICE_ORDER_PRICE, displayName: "Filled Price/Order Price"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.TRADE_TYPE, displayName: "Trade Type"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.STATUS, displayName: "Status"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.ORDER_NO, displayName: "Order No."},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.ORDER_TIME, displayName: "Order Time"},
]

export const ORDER_HISTORY_TRAILING_STOP = [
    {value: ORDER_HISTORY_GLOBAL_HEADERS.CONTRACTS, displayName: "Contracts"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.FILLED_ACTUAL_QTY, displayName: "Filled/Actual Qty"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.TRIGGER_PRICE, displayName: "Trigger Price"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.FILLED_PRICE_ORDER_PRICE, displayName: "Filled Price/Order Price"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.TRADE_TYPE, displayName: "Trade Type"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.STATUS, displayName: "Status"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.ORDER_NO, displayName: "Order No."},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.ORDER_TIME, displayName: "Order Time"},
]

export const ORDER_HISTORY_MMR_CLOSE = [
    {value: ORDER_HISTORY_GLOBAL_HEADERS.CONTRACTS, displayName: "Contracts"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.FILLED_ACTUAL_QTY, displayName: "Filled/Actual Qty"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.TRIGGER_PRICE, displayName: "MMR Trigger"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.FILLED_PRICE_ORDER_PRICE, displayName: "Filled Price/Order Price"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.TRADE_TYPE, displayName: "Trade Type"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.STATUS, displayName: "Status"},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.ORDER_NO, displayName: "Order No."},
    {value: ORDER_HISTORY_GLOBAL_HEADERS.ORDER_TIME, displayName: "Order Time"},
]

export const TRADE_HISTORY = [
    {value: TRADE_HISTORY_HEADERS.CONTRACTS, displayName: "Contracts"},
    {value: TRADE_HISTORY_HEADERS.FILLED_TOTAL, displayName: "Filled/Total"},
    {value: TRADE_HISTORY_HEADERS.FILLED_PRICE_ORDER_PRICE, displayName: "Filled Price/Order Price"},
    {value: TRADE_HISTORY_HEADERS.TRADE_TYPE, displayName: "Trade Type"},
    {value: TRADE_HISTORY_HEADERS.ORDER_TYPE, displayName: "Order Type"},
    {value: TRADE_HISTORY_HEADERS.FILLED_TYPE, displayName: "Filled Type"},
    {value: TRADE_HISTORY_HEADERS.TRANSACTION_ID, displayName: "Transaction ID"},
    {value: TRADE_HISTORY_HEADERS.TRANSACTION_TIME, displayName: "Transaction Time"},
]

export const PROFIT_LOSS = [
    {value: PROFIT_LOSS_HEADERS.CONTRACTS, displayName: "Contracts"},
    {value: PROFIT_LOSS_HEADERS.QUANTITY, displayName: "Qty"},
    {value: PROFIT_LOSS_HEADERS.ENTRY_PRICE, displayName: "Entry Price"},
    {value: PROFIT_LOSS_HEADERS.EXIT_PRICE, displayName: "Exit Price"},
    {value: PROFIT_LOSS_HEADERS.TRADE_TYPE, displayName: "Trade Type"},
    {value: PROFIT_LOSS_HEADERS.CLOSED_PL, displayName: "Closed P&L"},
    {value: PROFIT_LOSS_HEADERS.EXIT_TYPE, displayName: "Exit Type"},
    {value: PROFIT_LOSS_HEADERS.TRADE_TIME, displayName: "Trade Time"},
]

export const CURRENT_ORDER_ACTIVE = [
    {value: CURRENT_ORDER_ACTIVE_HEADERS.CONTRACTS, displayName: "Contracts"},
    {value: CURRENT_ORDER_ACTIVE_HEADERS.QUANTITY, displayName: "Qty"},
    {value: CURRENT_ORDER_ACTIVE_HEADERS.ORDER_PRICE, displayName: "Order Price"},
    {value: CURRENT_ORDER_ACTIVE_HEADERS.FILLED_TOTAL, displayName: "Filled/Total"},
    {value: CURRENT_ORDER_ACTIVE_HEADERS.TP_SL, displayName: "TP/SL"},
    {value: CURRENT_ORDER_ACTIVE_HEADERS.TRADE_TYPE, displayName: "Trade Type"},
    {value: CURRENT_ORDER_ACTIVE_HEADERS.ORDER_TYPE, displayName: "Order Type"},
    {value: CURRENT_ORDER_ACTIVE_HEADERS.REDUCE_ONLY, displayName: "Reduce-Only"},
    {value: CURRENT_ORDER_ACTIVE_HEADERS.STATUS, displayName: "Status"},
    {value: CURRENT_ORDER_ACTIVE_HEADERS.ORDER_NO, displayName: "Order No."},
    {value: CURRENT_ORDER_ACTIVE_HEADERS.ORDER_TIME, displayName: "Order Time"},
    {value: CURRENT_ORDER_ACTIVE_HEADERS.ACTION, displayName: "Action"},
]

export const CURRENT_ORDER_CONDITIONAL = [
    {value: CURRENT_ORDER_CONDITIONAL_HEADERS.CONTRACTS, displayName: "Contracts"},
    {value: CURRENT_ORDER_CONDITIONAL_HEADERS.QUANTITY, displayName: "Quantity"},
    {value: CURRENT_ORDER_CONDITIONAL_HEADERS.TRIGGER_PRICE, displayName: "Trigger Price"},
    {value: CURRENT_ORDER_CONDITIONAL_HEADERS.PRICE_DISTANCE, displayName: "Price (Distance)"},
    {value: CURRENT_ORDER_CONDITIONAL_HEADERS.ORDER_PRICE, displayName: "Order Price"},
    {value: CURRENT_ORDER_CONDITIONAL_HEADERS.TP_SL, displayName: "TP/SL"},
    {value: CURRENT_ORDER_CONDITIONAL_HEADERS.TRADE_TYPE, displayName: "Trade Type"},
    {value: CURRENT_ORDER_CONDITIONAL_HEADERS.REDUCE_ONLY, displayName: "Reduce-Only"},
    {value: CURRENT_ORDER_CONDITIONAL_HEADERS.STATUS, displayName: "Status"},
    {value: CURRENT_ORDER_CONDITIONAL_HEADERS.ORDER_NO, displayName: "Order No."},
    {value: CURRENT_ORDER_CONDITIONAL_HEADERS.ORDER_TIME, displayName: "Order Time"},
    {value: CURRENT_ORDER_CONDITIONAL_HEADERS.ACTION, displayName: "Action"},
]

export const CURRENT_ORDER_TP_SL = [
    {value: CURRENT_ORDER_TP_SL_HEADERS.CONTRACTS, displayName: "Contracts"},
    {value: CURRENT_ORDER_TP_SL_HEADERS.QUANTITY, displayName: "Qty"},
    {value: CURRENT_ORDER_TP_SL_HEADERS.TRIGGER_PRICE, displayName: "Trigger Price"},
    {value: CURRENT_ORDER_TP_SL_HEADERS.ORDER_PRICE, displayName: "Order Price"},
    {value: CURRENT_ORDER_TP_SL_HEADERS.TRADE_TYPE, displayName: "Trade Type"},
    {value: CURRENT_ORDER_TP_SL_HEADERS.ORDER_NO, displayName: "Order No."},
    {value: CURRENT_ORDER_TP_SL_HEADERS.ORDER_TIME, displayName: "Order Time"},
    {value: CURRENT_ORDER_TP_SL_HEADERS.ACTION, displayName: "Action"},
]

export const CURRENT_ORDER_TRAILING_STOP = [
    {value: CURRENT_ORDER_TRAILING_STOP_HEADERS.CONTRACTS, displayName: "Contracts"},
    {value: CURRENT_ORDER_TRAILING_STOP_HEADERS.QUANTITY, displayName: "Qty"},
    {value: CURRENT_ORDER_TRAILING_STOP_HEADERS.ORDER_PRICE, displayName: "Order Price"},
    {value: CURRENT_ORDER_TRAILING_STOP_HEADERS.TRIGGER_PRICE, displayName: "Trigger Price"},
    {value: CURRENT_ORDER_TRAILING_STOP_HEADERS.PRICE_DISTANCE, displayName: "Price (Distance)"},
    {value: CURRENT_ORDER_TRAILING_STOP_HEADERS.RETRACEMENT, displayName: "Retracement"},
    {value: CURRENT_ORDER_TRAILING_STOP_HEADERS.ACTIVATION_PRICE, displayName: "Activation Price"},
    {value: CURRENT_ORDER_TRAILING_STOP_HEADERS.TRADE_TYPE, displayName: "Trade Type"},
    {value: CURRENT_ORDER_TRAILING_STOP_HEADERS.STATUS, displayName: "Status"},
    {value: CURRENT_ORDER_TRAILING_STOP_HEADERS.ORDER_NO, displayName: "Order No."},
    {value: CURRENT_ORDER_TRAILING_STOP_HEADERS.ORDER_TIME, displayName: "Order Time"},
    {value: CURRENT_ORDER_TRAILING_STOP_HEADERS.ACTION, displayName: "Action"},
]

export const CURRENT_ORDER_MMR_CLOSE = [
    {value: CURRENT_ORDER_MMR_CLOSE_HEADERS.CONTRACTS, displayName: "Contracts"},
    {value: CURRENT_ORDER_MMR_CLOSE_HEADERS.QUANTITY, displayName: "Qty"},
    {value: CURRENT_ORDER_MMR_CLOSE_HEADERS.TRIGGER_MMR, displayName: "Trigger MMR"},
    {value: CURRENT_ORDER_MMR_CLOSE_HEADERS.ORDER_PRICE, displayName: "Order Price"},
    {value: CURRENT_ORDER_MMR_CLOSE_HEADERS.TRADE_TYPE, displayName: "Trade Type"},
    {value: CURRENT_ORDER_MMR_CLOSE_HEADERS.STATUS, displayName: "Status"},
    {value: CURRENT_ORDER_MMR_CLOSE_HEADERS.ORDER_NO, displayName: "Order No."},
    {value: CURRENT_ORDER_MMR_CLOSE_HEADERS.ORDER_TIME, displayName: "Order Time"},
    {value: CURRENT_ORDER_MMR_CLOSE_HEADERS.ACTION, displayName: "Action"},
]

export const CROSS_MARGIN_DATA: MarginModeDataITF[] = [
    {
        section_name: "Supports",
        list: ["Spot and Spot Margin", "USDT-Perp, USDC-Perp and USDC-Futures", "USDC Options"]
    },
    {
        section_name: "Mode(s)",
        list: ["One-way", "Hedge (USDT-Perp Only)"]
    },
    {
        section_name: "Features",
        list: [
            "Enables trading of Derivatives with USD value of multi-asset collateral",
            "Enables offsetting of profit and losses of positions against each other, and allows profits to be used to open new positions"
        ]
    }
]

export const ISOLATED_MARGIN_DATA: MarginModeDataITF[] = [
    {
        section_name: "Supports",
        list: ["Spot", "USDT-Perp, USDC-Perp and USDC-Futures"]
    },
    {
        section_name: "Mode(s)",
        list: ["One-way", "Hedge (USDT-Perp Only)"]
    },
    {
        section_name: "Features",
        list: [
            "Single Asset Mode: Trade USDT-Perp with USDT, and trade USDC-Perp/Futures with USDC",
            "Isolated Margin mode will apply to all USDT and USDC Perpetual and Futures positions.",
            "Supports both manual margin adjustment and auto margin replenishment"
        ]
    }
]

export const PORTFOLIO_MARGIN_DATA: MarginModeDataITF[] = [
    {
        section_name: "Supports",
        list: ["Spot and Spot Margin", "USDT-Perp, USDC-Perp and USDC-Futures", "USDC Options"]
    },
    {
        section_name: "Mode(s)",
        list: ["One-way"]
    },
    {
        section_name: "Features",
        list: [
            "Offset Collateral Risk between Spot and Derivatives",
            "Offset Spot PnL with Unrealized Perpetual Contract PnL"
        ]
    }
]
