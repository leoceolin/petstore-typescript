/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { PetstoreCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$petsAdd } from "./tools/petsAdd.js";
import { tool$petsDelete } from "./tools/petsDelete.js";
import { tool$petsFindByStatus } from "./tools/petsFindByStatus.js";
import { tool$petsFindByTags } from "./tools/petsFindByTags.js";
import { tool$petsGetById } from "./tools/petsGetById.js";
import { tool$petsUpdate } from "./tools/petsUpdate.js";
import { tool$petsUploadImage } from "./tools/petsUploadImage.js";
import { tool$storeDelete } from "./tools/storeDelete.js";
import { tool$storeGetById } from "./tools/storeGetById.js";
import { tool$storeGetInventory } from "./tools/storeGetInventory.js";
import { tool$storePlace } from "./tools/storePlace.js";
import { tool$userCreate } from "./tools/userCreate.js";
import { tool$userGet } from "./tools/userGet.js";
import { tool$usersCreateWithList } from "./tools/usersCreateWithList.js";
import { tool$usersDelete } from "./tools/usersDelete.js";
import { tool$usersLogin } from "./tools/usersLogin.js";
import { tool$usersLogout } from "./tools/usersLogout.js";
import { tool$usersUpdate } from "./tools/usersUpdate.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  apiKey?: SDKOptions["apiKey"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
  environment?: SDKOptions["environment"] | undefined;
}) {
  const server = new McpServer({
    name: "Petstore",
    version: "0.1.2",
  });

  const client = new PetstoreCore({
    apiKey: deps.apiKey,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
    environment: deps.environment,
  });

  const scopes = new Set(deps.scopes ?? mcpScopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$petsUpdate);
  tool(tool$petsAdd);
  tool(tool$petsFindByStatus);
  tool(tool$petsFindByTags);
  tool(tool$petsGetById);
  tool(tool$petsDelete);
  tool(tool$petsUploadImage);
  tool(tool$storeGetInventory);
  tool(tool$storePlace);
  tool(tool$storeGetById);
  tool(tool$storeDelete);
  tool(tool$userCreate);
  tool(tool$userGet);
  tool(tool$usersCreateWithList);
  tool(tool$usersLogin);
  tool(tool$usersLogout);
  tool(tool$usersUpdate);
  tool(tool$usersDelete);

  return server;
}
