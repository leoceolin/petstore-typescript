/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { petsUploadImage } from "../../funcs/petsUploadImage.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UploadFileRequest$inboundSchema,
};

export const tool$petsUploadImage: ToolDefinition<typeof args> = {
  name: "pets-upload-image",
  description: `uploads an image`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await petsUploadImage(
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
