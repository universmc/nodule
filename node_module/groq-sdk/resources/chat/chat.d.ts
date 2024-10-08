import { APIResource } from "../../resource.js";
import * as CompletionsAPI from "./completions.js";
export declare class Chat extends APIResource {
    completions: CompletionsAPI.Completions;
}
export declare namespace Chat {
    export import Completions = CompletionsAPI.Completions;
    export import ChatCompletion = CompletionsAPI.ChatCompletion;
    export import ChatCompletionAssistantMessageParam = CompletionsAPI.ChatCompletionAssistantMessageParam;
    export import ChatCompletionChunk = CompletionsAPI.ChatCompletionChunk;
    export import ChatCompletionContentPart = CompletionsAPI.ChatCompletionContentPart;
    export import ChatCompletionContentPartImage = CompletionsAPI.ChatCompletionContentPartImage;
    export import ChatCompletionContentPartText = CompletionsAPI.ChatCompletionContentPartText;
    export import ChatCompletionFunctionCallOption = CompletionsAPI.ChatCompletionFunctionCallOption;
    export import ChatCompletionFunctionMessageParam = CompletionsAPI.ChatCompletionFunctionMessageParam;
    export import ChatCompletionMessage = CompletionsAPI.ChatCompletionMessage;
    export import ChatCompletionMessageParam = CompletionsAPI.ChatCompletionMessageParam;
    export import ChatCompletionMessageToolCall = CompletionsAPI.ChatCompletionMessageToolCall;
    export import ChatCompletionNamedToolChoice = CompletionsAPI.ChatCompletionNamedToolChoice;
    export import ChatCompletionRole = CompletionsAPI.ChatCompletionRole;
    export import ChatCompletionSystemMessageParam = CompletionsAPI.ChatCompletionSystemMessageParam;
    export import ChatCompletionTokenLogprob = CompletionsAPI.ChatCompletionTokenLogprob;
    export import ChatCompletionTool = CompletionsAPI.ChatCompletionTool;
    export import ChatCompletionToolChoiceOption = CompletionsAPI.ChatCompletionToolChoiceOption;
    export import ChatCompletionToolMessageParam = CompletionsAPI.ChatCompletionToolMessageParam;
    export import ChatCompletionUserMessageParam = CompletionsAPI.ChatCompletionUserMessageParam;
    export import CompletionCreateParams = CompletionsAPI.CompletionCreateParams;
}
//# sourceMappingURL=chat.d.ts.map