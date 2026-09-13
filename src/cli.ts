#!/usr/bin/env node

/**
 * Gogi MCP Client Bridge
 * For stdio-based clients (e.g. Claude Desktop), this proxies stdio JSON-RPC messages
 * to Gogi's hosted Streamable HTTP MCP server at https://api.gogi.ai/api/mcp/stream.
 */

import http from 'node:https';
import process from 'node:process';

const GOGI_API_KEY = process.env.GOGI_API_KEY || process.argv[2];
const MCP_ENDPOINT = process.env.GOGI_MCP_URL || 'https://api.gogi.ai/api/mcp/stream';

if (!GOGI_API_KEY && !process.argv.includes('--help') && !process.argv.includes('-h')) {
  console.error('[Gogi MCP] Notice: GOGI_API_KEY environment variable not set.');
  console.error('[Gogi MCP] Pass key via env: GOGI_API_KEY=gogi_live_... npx @gogi/mcp-server');
  console.error('[Gogi MCP] Or configure directly in Cursor Settings -> MCP -> Add new MCP server:');
  console.error('            URL: https://api.gogi.ai/api/mcp/stream');
  console.error('            Header: Authorization: Bearer YOUR_API_KEY');
}

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
Gogi Model Context Protocol (MCP) Server

Usage:
  Direct Streamable HTTP / SSE (Cursor, Windsurf, Cline):
    URL: https://api.gogi.ai/api/mcp/stream
    Header: Authorization: Bearer <GOGI_API_KEY>

  Claude Desktop / stdio bridge:
    npx -y mcp-remote https://api.gogi.ai/api/mcp/stream --header "Authorization: Bearer <GOGI_API_KEY>"

Get your API key at: https://gogi.ai/agents
Documentation: https://gogi.ai/docs
`);
  process.exit(0);
}

console.log('[Gogi MCP] Stream endpoint:', MCP_ENDPOINT);
