---
description: Unified trading, technical analysis, risk policy inspection, and multi-broker execution with Gogi MCP
---

# Gogi Trading & Financial Intelligence Skill

Use this skill when interacting with the Gogi MCP Server to perform market analysis, inspect broker portfolios, track Web3 non-custodial wallets, manage algorithmic instances, or execute equity, ETF, forex, crypto, DeFi, and prediction market trades.

## 1. Portfolio & Risk Inspection Workflow
Before executing or proposing any live orders:
1. Call `get_portfolio` to view cross-broker unified equity, available cash, and connected Web3 wallet balances (EVM and Solana).
2. Call `get_positions` to check existing exposure and avoid over-concentration in a single asset, ETF, or currency.
3. Call `get_policy` to verify:
   - Maximum allowable order size ($ USD or % equity).
   - Maximum daily loss limit ($ USD).
   - Allowed symbols / forbidden list.
   - Execution Loop Mode (`HITL` Human-In-The-Loop vs `AITL` Autonomous).

`get_portfolio` is the account-level snapshot: balances, equity, buying power, positions,
and wallet holdings. Use `get_positions` when you only need normalized open exposure.

## 2. Saved Algorithm Lifecycle

1. Call `list_my_algos` before changing or activating a saved algorithm; use its `algo_id`.
2. Use `update_algo` for the saved definition. Use `update_linked_algo` for a runtime
   change on an existing live instance.
3. Use `delete_algo` only after the user explicitly confirms archival. Linked algorithms
   must be deactivated first.
4. Use `create_and_start_algo` only as a convenience path for creating a new strategy
   and starting it in one workflow. Prefer granular tools when the user needs control.

5. Use `get_algo` to retrieve one saved definition by ID. Use `update_instance` for
   instance-level settings and `update_linked_algo` for a linked strategy's runtime
   parameters. Use `cancel_pending_trade` to withdraw an order awaiting confirmation.

## 3. Market Intelligence & Technical Analysis Workflow
1. Use `get_market_data(symbol, timeframe)` to fetch:
   - Live price quote and spread.
   - Key technical indicators (RSI-14, MACD, 20/50/200-period SMAs & EMAs).
2. Use `analyze_chart_structure(symbol, timeframe)` to detect:
   - Major support and resistance levels.
   - Fibonacci retracement zones.
   - Ascending/descending triangles, head & shoulders, or trend breakouts.
3. Use `get_data_feed(feed_id, query)` or `list_data_feeds` to check institutional data (SEC 10-K/10-Q filings, insider buying, congressional trades).

## 4. Asset Class Rules & Execution Standards
- **Equities / ETFs (Alpaca / Charles Schwab)**: Specify ticker symbol directly (e.g. `AAPL`, `NVDA`, `TSLA`, `SPY`, `QQQ`, `IWM`, `DIA`). Quantity is share count.
- **Forex (TradeLocker / OANDA)**:
  - Standard format: `EUR/USD`, `GBP/USD`, `USD/JPY`, `AUD/USD`, `USD/CAD`, `USD/CHF`, `NZD/USD`.
  - Always calculate and confirm position size in standard lots (`1.0` = 100,000 units), mini lots (`0.1` = 10,000 units), or micro lots (`0.01` = 1,000 units).
- **Crypto & Web3 Wallets (Kraken / Coinbase / Alpaca / On-Chain)**: Spot pair symbols (e.g. `BTC/USD`, `ETH/USD`, `SOL/USD`), connected wallets, and on-chain DEX swaps. Quantity is base asset coins.
- **Prediction Markets (Polymarket / Kalshi)**: Use `search_predictions` to obtain contract IDs, then call `execute_prediction`.

## 5. Order Execution Safeguards
- Live orders placed via `execute_trade` default to requiring Human-In-The-Loop confirmation in the Gogi web app.
- Provide users with an explicit order summary before firing:
  - Instrument & Asset Class (Equities/ETFs, Forex, Crypto, Prediction)
  - Direction: BUY / SELL
  - Quantity (Shares, Coins, or Lots)
  - Order Type (MARKET / LIMIT) & Target Price
  - Target Broker Account ID / Connected Wallet
