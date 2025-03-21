/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { userGet } from "../../funcs/userGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetUserByNameRequest$inboundSchema,
};

export const tool$userGet: ToolDefinition<typeof args> = {
  name: "user-get",
  description: `Get user by user name`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await userGet(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
