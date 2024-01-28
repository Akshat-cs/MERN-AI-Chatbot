import { Avatar, Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

function extractCodeFromString(message: string) {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
}

function isCodeBlock(str: string) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ) {
    return true;
  }
  return false;
}

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "assistant" | "user";
}) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useAuth();
  return role === "assistant" ? (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#004d5612", gap: 2 }}>
      <Avatar sx={{ ml: "0" }}>
        <img src="openai.png" alt="openai" width={"30px"} />
      </Avatar>
      <Box>
        {!messageBlocks && (
          <Typography fontSize={"16px"} mt={"6px"}>
            {content}
          </Typography>
        )}
        {messageBlocks &&
          messageBlocks?.length &&
          messageBlocks?.map((block) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter style={coldarkCold} language="javascript">
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography fontSize={"16px"} mt={"6px"}>
                {block}
              </Typography>
            )
          )}
      </Box>
    </Box>
  ) : (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#004d56", gap: 2 }}>
      <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
        {auth?.user?.name[0]}
      </Avatar>
      <Box>
        {!messageBlocks && (
          <Typography fontSize={"16px"} mt={"6px"}>
            {content}
          </Typography>
        )}
        {messageBlocks &&
          messageBlocks?.length &&
          messageBlocks?.map((block) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter style={coldarkCold} language="javascript">
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography fontSize={"16px"} mt={"6px"}>
                {block}
              </Typography>
            )
          )}
      </Box>
    </Box>
  );
};

export default ChatItem;
