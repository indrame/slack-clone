import { useParenntMessageId } from "@/features/messages/store/use-parent-message-id"

 
 export const usePanel = () => {
    const [parentMessageId, setParentMessageId] = useParenntMessageId();

    const onOpenMessage = (messageId: string) => {
        setParentMessageId(messageId);
    }

    const onClose = () => {
        setParentMessageId(null);
    }

    return {
        parentMessageId,
        onOpenMessage,
        onClose
    }
 }