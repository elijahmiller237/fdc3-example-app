import { useMemo } from "react";
import { NewsItem } from "../types";
import styled from "@emotion/styled";

type StockNewsItemProps = {
  data: NewsItem;
};

export const StockNewsItem = ({ data }: StockNewsItemProps) => {
  const thumbnail = useMemo(() => {
    if (data.thumbnail.resolutions.length == 0)
      return { url: "", width: 0, height: 0, tag: "" };
    return data.thumbnail.resolutions[0];
  }, [data]);

  return (
    <StockNewsItemContainer>
      <NewsItemTitle>{data.title}</NewsItemTitle>
      <NewsItemPublisher>{`From: ${data.publisher}`}</NewsItemPublisher>
      <TimePublished>{`Published ${new Date(
        data.providerPublishTime
      )}`}</TimePublished>
      <img
        src={thumbnail.url}
        height={500}
        width={500 * (thumbnail.width / thumbnail.height)}
      />
      <LinkTextContainer>
        Read the full article <a href={data.link}>here</a>
      </LinkTextContainer>
    </StockNewsItemContainer>
  );
};

const StockNewsItemContainer = styled("li")({
  marginBottom: "48px",
});

const NewsItemTitle = styled("h2")({});

const NewsItemPublisher = styled("h3")({});

const TimePublished = styled("h3")({});

const LinkTextContainer = styled("h4")({});
