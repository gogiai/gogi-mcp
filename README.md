<div align="center">
  <img src="https://gogi.ai/32x32.svg" width="64" height="64" alt="Gogi Logo" />
  <h1>Gogi Model Context Protocol (MCP) Server</h1>
</div>

<p align="center">
  <a href="https://smithery.ai/servers/gogiai/gogi-mcp"><img src="https://smithery.ai/badge/gogiai/gogi-mcp" alt="Gogi MCP on Smithery" /></a>
  <a href="https://glama.ai/mcp/servers/gogiai/gogi-mcp"><img src="https://glama.ai/mcp/servers/gogiai/gogi-mcp/badges/score.svg" alt="Gogi MCP Server on Glama" /></a>
  <a href="https://cursor.com"><img src="https://img.shields.io/badge/Cursor-MCP%20Ready-58a6ff?logo=cursor&logoColor=white" alt="Cursor Ready" /></a>
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP%20Protocol-2024--11--05-blue" alt="Protocol" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License" /></a>
</p>

Official Smithery listing: <https://smithery.ai/servers/gogiai/gogi-mcp>  
Official Glama listing: <https://glama.ai/mcp/servers/gogiai/gogi-mcp>

**Gogi** is the unified financial infrastructure and execution middleware connecting AI agents directly to live brokerage accounts, Web3 non-custodial wallets, real-time market data across equities, ETFs, crypto, forex, options, DeFi swaps, and prediction markets, institutional research feeds, and algorithmic strategy backtesters.

This official Model Context Protocol (MCP) server allows AI assistants in **Cursor**, **Claude Desktop / Claude Code**, **Windsurf**, **Cline / Roo Code**, and other MCP clients to query real-time market quotes, inspect portfolio balances and Web3 wallets across multiple brokers, place protected equity/ETF, crypto, forex, and options orders, execute DeFi swaps, and run backtests.

---

## 🌐 Supported Asset Classes & Connected Integrations

| Asset Class | Supported Symbols & Instruments | Primary Connected Integrations |
|-------------|--------------------------------|--------------------------------|
| **Equities & ETFs** | US Equities & Exchange-Traded Funds (`AAPL`, `NVDA`, `TSLA`, `SPY`, `QQQ`, `IWM`, `DIA`, `XLK`, `VOO`) | Alpaca, Charles Schwab *(IBKR coming soon)* |
| **Forex & Currencies** | Major & Minor pairs (`EUR/USD`, `GBP/USD`, `USD/JPY`, `AUD/USD`, `USD/CAD`, `USD/CHF`, `NZD/USD`, `EUR/GBP`) in standard/mini/micro lots | TradeLocker, OANDA |
| **Crypto & DeFi Swaps**| Spot & Perpetual crypto (`BTC/USD`, `ETH/USD`, `SOL/USD`), multi-chain Web3 non-custodial wallets, and on-chain DEX token swaps | Kraken, Coinbase, Alpaca, Connected Web3 Wallets |
| **Options** | Single and multi-leg Equity & ETF Call and Put contracts | Alpaca, Charles Schwab |
| **Prediction Markets**| Real-money outcome contracts (Macro, Rates, Elections) | Polymarket, Kalshi |

---

## 📋 Getting Started with Gogi

To use the Gogi MCP Server, you need a Gogi API key connected to your trading account:

1. **Create an Account**: Sign up at [https://gogi.ai](https://gogi.ai).
2. **Connect Broker Accounts & Wallets**: Go to [https://gogi.ai/dashboard](https://gogi.ai/dashboard) → **Brokers & Wallets** and connect your preferred platforms:
   - Alpaca (Equities, ETFs, Options & Crypto)
   - Charles Schwab (Equities, ETFs & Options)
   - TradeLocker (Forex & CFDs)
   - Kraken (Crypto)
   - Coinbase (Crypto)
   - Web3 Wallets (EVM & Solana Wallets, DeFi token swaps)
   - *(Interactive Brokers IBKR coming soon)*
3. **Subscribe to MCP in the Marketplace**:
   - Go to [https://gogi.ai/marketplace](https://gogi.ai/marketplace).
   - Locate the **MCP Connectors** section (Cursor MCP, Claude MCP, or Custom Agent MCP).
   - Click **Connect** to activate your agent connection.
4. **Obtain Your API Key**:
   - Navigate to [https://gogi.ai/agents](https://gogi.ai/agents) and select your MCP Agent.
   - Click **Generate / Rotate API Key** (starts with `gogi_live_...`).
   - Copy the Bearer token for your client configuration.

---

## ⚡ 1-Click Install via Smithery

### For Cursor IDE / Windsurf / Claude Desktop

```bash
npx -y @smithery/cli install @gogiai/gogi-mcp --client cursor
```

*Replace `--client cursor` with `--client claude` or `--client windsurf` depending on your IDE.*

---

## 🛠️ Manual Client Setup

### 1. Cursor IDE

In Cursor, open **Settings → Features → MCP Servers → Add new MCP server** (or edit `.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "gogi": {
      "url": "https://api.gogi.ai/api/mcp/stream",
      "headers": {
        "Authorization": "Bearer YOUR_GOGI_API_KEY"
      }
    }
  }
}
```

---

### 2. Claude Desktop

Edit your Claude Desktop configuration file:
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "gogi": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.gogi.ai/api/mcp/stream",
        "--header",
        "Authorization: Bearer YOUR_GOGI_API_KEY"
      ]
    }
  }
}
```

---

### 3. Claude Code (CLI)

Add Gogi directly via the Claude Code CLI:

```bash
claude mcp add gogi https://api.gogi.ai/api/mcp/stream --header "Authorization: Bearer YOUR_GOGI_API_KEY"
```

---

### 4. Windsurf / Codeium

Edit `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "gogi": {
      "serverUrl": "https://api.gogi.ai/api/mcp/stream",
      "headers": {
        "Authorization": "Bearer YOUR_GOGI_API_KEY"
      }
    }
  }
}
```

---

### 5. Cline / Roo Code (VS Code Extension)

Add to `cline_mcp_settings.json`:

```json
{
  "mcpServers": {
    "gogi": {
      "url": "https://api.gogi.ai/api/mcp/stream",
      "headers": {
        "Authorization": "Bearer YOUR_GOGI_API_KEY"
      },
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

---

## 🧰 Complete Tools Catalog (37 MCP Tools)

### 1. Portfolio & Broker Accounts
| Tool Name | Parameters | Description |
|-----------|------------|-------------|
| `get_portfolio` | *(none)* | Returns account-level equity, buying power, cash balances, positions, and Web3 wallet balances across connected brokers and wallets. |
| `get_positions` | *(none)* | Lists normalized open positions and exposure. Use `get_portfolio` for account balances and wallet holdings. |
| `get_algo` | `algo_id` | Retrieves one saved algorithm by ID; use `get_linked_algo` for an instance-specific runtime copy. |
| `list_brokers` | *(none)* | Lists all connected broker accounts, account numbers, connection statuses, and supported asset classes. |

### 2. Real-Time Market Data & Analysis
| Tool Name | Parameters | Description |
|-----------|------------|-------------|
| `get_market_data` | `symbol`, `timeframe` | Real-time quote, market state, and technical indicators (RSI-14, MACD 12/26/9, 20/50/200 SMA & EMA). Supported timeframes: `1min`, `5min`, `15min`, `30min`, `1hour`, `4hour`, `1day` (default), `weekly`. |
| `analyze_chart_structure` | `symbol`, `timeframe` | Evaluates support/resistance pivots, Fibonacci levels, trend lines, and geometric chart patterns. Supported windows: `1m`, `5m`, `15m`, `30m`, `1H`, `4H`, `1D` (default), `1W`, `1M`. |

### 3. Institutional Research & Knowledge
| Tool Name | Parameters | Description |
|-----------|------------|-------------|
| `list_data_feeds` | *(none)* | Lists all available and subscribed data feeds (Corporate Insider Radar, Congressional Trades, SEC 10-K/10-Q Streams, Custom Files). |
| `get_data_feed` | `feed_id`, `query` | Queries data from a subscribed institutional research feed. |
| `read_file` | `file_id` | Reads preview text, metadata, and extracted tables from user-uploaded research files. |

### 4. Order Execution & Position Closing
| Tool Name | Parameters | Description |
|-----------|------------|-------------|
| `execute_trade` | `symbol`, `side`, `quantity`, `broker_account_id`, `order_type`, `limit_price` | Places an equity, ETF, crypto, or forex order on a connected broker (e.g., Alpaca, Charles Schwab, TradeLocker, Kraken). For Forex (e.g. `EUR/USD`), `quantity` is specified in lots (e.g., `0.01` micro lot, `0.1` mini lot, `1.0` standard lot). In Human-In-The-Loop (HITL) mode, generates a pending confirmation card; in AITL mode, executes directly. |
| `close_positions` | `broker_account_id`, `symbol`, `quantity`, `side`, `confirm_close_all` | Closes open equity, crypto, options, or forex positions on a single symbol or flattens all positions across broker accounts. |
| `list_pending_trades` | *(none)* | Lists all pending trades waiting for Human-In-The-Loop approval in the Gogi web app. |
| `get_pending_trade_status`| `pending_trade_id` | Checks whether a pending trade was approved, rejected, or expired. |
| `cancel_pending_trade` | `pending_trade_id` | Cancels a pending trade before confirmation; resolved trades cannot be cancelled. |

### 5. Prediction Markets
| Tool Name | Parameters | Description |
|-----------|------------|-------------|
| `search_predictions` | `query` | Searches active prediction market contracts across Polymarket and Kalshi. |
| `execute_prediction` | `ticker`, `side`, `contracts`, `price_cents`, `platform` | Places an order on Kalshi or Polymarket prediction contracts. |

### 6. Risk Policy & Linked Strategy Controls
| Tool Name | Parameters | Description |
|-----------|------------|-------------|
| `get_policy` | *(none)* | Fetches agent risk rules, max order size, max daily loss limit, allowed symbols, and Human vs. AI loop mode. |
| `get_linked_algo` | `instance_id`, `linked_algo_id` | Inspects current parameters, indicator thresholds, and HITL overrides for an active strategy. |
| `update_linked_algo` | `instance_id`, `linked_algo_id`, `name`, `parameters`, `mcp_require_confirm`, `confirm_loop_mode` | Updates active strategy parameters or toggles automated vs confirm-required execution. |

### 7. Trading Instances & Algorithm Management
| Tool Name | Parameters | Description |
|-----------|------------|-------------|
| `list_instances` | *(none)* | Lists all live and paper trading instances with allocated capital and run states. |
| `create_instance` | `name`, `broker_account_id`, `description`, `is_live` | Creates a new trading instance bound to a broker account. |
| `update_instance` | `instance_id`, `name`, `auto_restart`, `is_ml_risk_enabled`, `is_ml_refinement_enabled`, `is_live` | Updates an owned instance; setting `is_live=true` can start live execution. |
| `create_algo` | `name`, `strategy_type`, `indicators`, `entry_conditions`, `exit_conditions` | Defines a new algorithmic strategy. |
| `list_my_algos` | `include_inactive` | Lists saved algorithms owned by the user with stable IDs, strategy summaries, symbols, timeframe, and archive state. |
| `update_algo` | `algo_id`, `name`, `description`, `strategy_params`, `symbols`, `timeframe` | Updates a saved algorithm definition without changing an already-linked live instance. |
| `delete_algo` | `algo_id`, `confirm` | Archives a saved algorithm after explicit confirmation; linked algorithms must be deactivated first. |
| `activate_algo` | `instance_id`, `algo_id`, `capital`, `symbols`, `confirm_allocation` | Allocates buying power and binds an algorithm to an execution instance. |
| `deactivate_algo` | `instance_id`, `linked_algo_id` | Unlinks an algorithm from an instance and frees allocated capital. |
| `start_instance` | `instance_id` | Starts automated monitoring and signal evaluation on a trading instance. |
| `stop_instance` | `instance_id` | Stops a running trading instance. |
| `delete_instance` | `instance_id`, `confirm_close_positions`, `force` | Deletes a trading instance and unbinds associated resources. |
| `create_and_start_algo` | *(combined creation & launch parameters)* | Convenience path for a new strategy. Prefer `list_my_algos` and granular lifecycle tools when managing an existing algorithm. |

### 8. Quantitative Backtesting
| Tool Name | Parameters | Description |
|-----------|------------|-------------|
| `run_backtest` | `symbol`, `timeframe`, `start_date`, `end_date`, `indicators`, `entry_conditions`, `exit_conditions`, `initial_capital` | Simulates algorithmic trading performance against real historical bars for stocks, crypto, and major forex pairs (`EUR/USD`, `GBP/USD`, `USD/JPY`) with full P&L, Sharpe, and drawdown metrics. Supported timeframes: `1m`, `5m`, `15m`, `30m`, `1h`, `4h`, `1d` (default), `1w`. |
| `list_backtest_runs` | *(none)* | Lists historical backtest runs and summary performance. |
| `get_backtest_run` | `backtest_id` | Fetches full trade-by-trade ledger and equity curve for a specific backtest. |

### 9. Observability & Disclosures
| Tool Name | Parameters | Description |
|-----------|------------|-------------|
| `log_event` | `event_type`, `description`, `payload` | Log and persist a custom activity event. Writes a permanent, non-idempotent event record to Gogi's database (retained indefinitely) visible in the user's UI Activity Feed. Do not use for reporting trade executions (action tools automatically log those). |
| `get_platform_disclosure`| *(none)* | Returns official financial disclosure, terms, and risk boundaries. |

---

## 🔒 Security Architecture

- **Zero-Storage of API Keys**: Gogi encrypts all broker secrets using Google Cloud Key Management Service (KMS) Hardware Security Modules (HSM).
- **Default Human-In-The-Loop (HITL)**: All live trading tool calls default to requiring explicit 1-click confirmation in the Gogi web app unless you explicitly configure autonomous (AITL) mode in Agent Policy.
- **Isolated Network Sessions**: Streamable HTTP and SSE transports are protected with TLS and Redis-backed session authorization.

---

## ⚠️ IMPORTANT FINANCIAL DISCLAIMER

**Not financial advice.** Nothing produced by this software or MCP server is investment, financial, legal, tax, or accounting advice. Gogi is an informational and educational analysis and execution middleware tool. Its outputs, including indicators, scores, signals, "trade setups", entries, stop losses, and targets, are computed from third party market data and are **not** recommendations to buy, sell, or hold any asset. It does not manage money or guarantee any result. Trading and investing carry a substantial risk of loss, and you can lose some or all of your capital. Always do your own research and consult a licensed professional before making any financial decision. You are solely responsible for your own decisions and for complying with the laws and regulations that apply to you. Market data may be delayed, inaccurate, or incomplete, and is provided without warranty.

---

## 🏢 About Gogi Inc.

- **Website**: [https://gogi.ai](https://gogi.ai)
- **Developer Portal**: [https://gogi.ai/agents](https://gogi.ai/agents)
- **Legal & Terms**: [https://gogi.ai/terms](https://gogi.ai/terms)
- **Support**: `support@gogi.ai`
