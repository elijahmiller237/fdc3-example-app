import { Channel, getOrCreateChannel } from "@finos/fdc3";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

type ChannelViewProps = {
  title: string;
};

export const ChannelView = ({ title }: ChannelViewProps) => {
  const currentChannel = useRef<Channel | null>(null);
  const [currentChannelId, setCurrentChannelId] = useState("default1");
  const [channelTextFieldValue, setChannelTextFieldValue] =
    useState("default1");

  const [currentValue, setCurrentValue] = useState("foo");

  const listenToChannel = useCallback(async (channelId: string) => {
    const channel = await getOrCreateChannel(channelId);
    const contextListener = await channel.addContextListener(
      "exampleContext",
      (ctx) => {
        setCurrentValue(ctx.id?.value ?? "AAPL");
      }
    );
    currentChannel.current = channel;

    return () => contextListener.unsubscribe();
  }, []);

  const handleBroadcast = useCallback((value: string) => {
    if (currentChannel.current !== null) {
      currentChannel.current.broadcast({
        type: "exampleContext",
        id: { value },
      });
    }
  }, []);

  useEffect(() => {
    const cleanup = listenToChannel(currentChannelId);

    return () => {
      cleanup.then((fn) => fn());
    };
  }, [currentChannelId, listenToChannel]);

  return (
    <ChannelViewContainer>
      <h3>{title}</h3>
      <div>Current Channel: {currentChannelId}</div>
      <InputsContainer>
        <TextField
          label="Set Channel"
          value={channelTextFieldValue}
          onChange={(e) => setChannelTextFieldValue(e.currentTarget.value)}
        />
        <Button
          variant="contained"
          onClick={() => setCurrentChannelId(channelTextFieldValue)}
        >
          Set Channel
        </Button>
        <TextField
          label="Set Value"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.currentTarget.value)}
        />
        <Button
          variant="contained"
          onClick={() => handleBroadcast(currentValue)}
        >
          Broadcast
        </Button>
      </InputsContainer>
    </ChannelViewContainer>
  );
};

const ChannelViewContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  backgroundColor: "white",
  flexDirection: "column",
  fontFamily: "Segoe UI",
  fontWeight: 600,
  fontSize: "24px",
  gap: "36px",
});

const InputsContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridTemplateRows: "auto auto",
  gap: "16px",
});
