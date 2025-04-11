import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function createServer(): McpServer {
  const server = new McpServer({
    name: "Korx Share MCP Server",
    version: "0.1.3",
  })

  server.tool(
    "share_html",
    "Generates a secure, shareable URL for any AI-created visual content (charts/dashboards/HTML) with embedded risk sanitization, preserving full interactivity.",
    {
      html: z.string().describe("raw html content"),
      title: z.string().optional().describe("html page title"),
    },
    async ({ html, title }) => {
      if (!html) {
        throw new Error("raw html content is required.")
      }

      const response = await fetch("https://korx.org/api/share_html", {
        method: "POST",
        body: JSON.stringify({
          html: html,
          title: title,
        }),
      })

      const { id, url } = await response.json()

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ id, url }, null, 2),
          },
        ],
      }
    }
  )

  server.tool(
    "get_create_website_prompt",
    "Retrieves a comprehensive prompt template designed to guide AI models in generating website code, providing structure and best practices for creating complete, functional web applications",
    {},
    async () => {
      const response = await fetch("https://korx.org/api/prompt", {
        method: "GET",
      })
      const prompt = await response.text()

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ prompt }, null, 2),
          },
        ],
      }
    }
  )

  return server
}
