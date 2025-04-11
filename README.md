# Korx Share MCP Server

A powerful MCP (Multi-Client Protocol) server that integrates with [korx.org](https://korx.org)'s API to generate secure, shareable URLs for AI-created visual content. This server enables seamless sharing of charts, dashboards, and HTML pages while maintaining full interactivity and ensuring content safety through embedded risk sanitization.

## Features

- Generate secure, shareable URLs for:
  - Charts and visualizations
  - Interactive dashboards
  - HTML content
- Embedded risk sanitization for content safety
- Preserves full interactivity of shared content
- Easy integration with MCP-supported clients

## Usage

This MCP server can be integrated with any MCP-supported client, including:

- Claude
- Cursor
- Other MCP-compatible AI assistants

### Configuration

To use the Korx Share MCP Server in your MCP-supported client, add the following configuration:

```json
{
  "mcp_server": {
    "korx-share": {
      "command": "npx",
      "args": ["-y", "korx-share-mcp-server@latest"]
    }
  }
}
```

## How It Works

1. The server receives HTML content from MCP-supported clients
2. Processes the content through [korx.org](https://korx.org)'s API
3. Applies risk sanitization measures
4. Generates a secure, shareable URL
5. Returns the URL while preserving the content's full interactivity

## Security

- All shared content undergoes risk sanitization
- Secure URL generation for safe content sharing
- Protected against common web vulnerabilities

## Requirements

- MCP-compatible client
- Network access to [korx.org](https://korx.org) services

## Website

https://korx.org

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support or questions, please open an issue in the GitHub repository.
