/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { usersDelete } from "../../funcs/usersDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteUserRequest$inboundSchema,
};

export const tool$usersDelete: ToolDefinition<typeof args> = {
  name: "users-delete",
  description: `Delete user

This can only be done by the logged in user.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await usersDelete(
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
