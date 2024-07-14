import { useCallback, useEffect, useMemo, useState } from "react";
import { addIntentListener, fdc3Ready } from "@finos/fdc3";
import { useStockNews } from "../hooks";
import { StockNewsItem } from "./StockNewsItem";
import styled from "@emotion/styled";

export const NewsView = () => {
  const [currentTicker, setCurrentTicker] = useState("AAPL");

  const { news, refresh } = useStockNews();

  const newsItems = useMemo(() => {
    return news.map((newsItem, index) => (
      <StockNewsItem key={index} data={newsItem} />
    ));
  }, [news]);

  const setup = useCallback(async () => {
    await fdc3Ready;
    const listener = await addIntentListener("ViewNews", (ctx) => {
      setCurrentTicker(ctx.id?.ticker ?? "AAPL");
    });

    return () => listener.unsubscribe();
  }, []);

  useEffect(() => {
    const cleanup = setup();

    return () => {
      cleanup.then((cleanupFn) => cleanupFn());
    };
  }, [setup]);

  useEffect(() => {
    refresh(currentTicker);
  }, [refresh, currentTicker]);

  return (
    <NewsViewContainer>
      <PageTitle>{`Latest News for ${currentTicker}`}</PageTitle>
      <NewsItemsContainer>{newsItems}</NewsItemsContainer>
    </NewsViewContainer>
  );
};

const NewsItemsContainer = styled("ul")({
  listStyleType: "none",
  padding: "8px",
  margin: "0px",
});

const NewsViewContainer = styled("div")({
  fontFamily: "Segoe UI",
  color: "white",
});

const PageTitle = styled("h1")({
  margin: "0px",
  padding: "16px 8px",
});
