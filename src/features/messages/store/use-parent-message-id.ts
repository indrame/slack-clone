import { useQueryState } from "nuqs";

export const useParenntMessageId = () => {
    return useQueryState("parentMessageId");
};