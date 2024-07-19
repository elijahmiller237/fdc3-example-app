import { useCallback, useEffect, useState } from "react";
import { useProfileData } from "../hooks";
import { addIntentListener, fdc3Ready, getOrCreateChannel } from "@finos/fdc3";
import styled from "@emotion/styled";

export const ProfileView = () => {
  const [currentTicker, setCurrentTicker] = useState("AAPL");

  const { profile, refresh } = useProfileData();

  const setup = useCallback(async () => {
    await fdc3Ready;
    const intentListener = await addIntentListener("ViewProfile", (ctx) => {
      setCurrentTicker(ctx.id?.ticker ?? "AAPL");
    });
    const channel = await getOrCreateChannel("currentTicker");
    const contextListener = await channel.addContextListener(
      "changeTicker",
      (ctx) => {
        setCurrentTicker(ctx.id?.ticker ?? "AAPL");
      }
    );

    return () => {
      intentListener.unsubscribe();
      contextListener.unsubscribe();
    };
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
    <ProfileContainer>
      <PageTitle>Profile for {currentTicker}</PageTitle>
      <ProfileTable>
        <ProfileTableRow
          displayName="Symbol"
          name="symbol"
          value={profile?.symbol}
        />
        <ProfileTableRow displayName="Name" name="name" value={profile?.name} />
        <ProfileTableRow
          displayName="Exchange"
          name="exchange"
          value={profile?.exchange}
        />
        <ProfileTableRow
          displayName="MIC Code"
          name="mic_code"
          value={profile?.mic_code}
        />
        <ProfileTableRow
          displayName="Sector"
          name="sector"
          value={profile?.sector}
        />
        <ProfileTableRow
          displayName="Industry"
          name="industry"
          value={profile?.industry}
        />
        <ProfileTableRow
          displayName="Number of Employees"
          name="employees"
          value={profile?.employees}
        />
        <ProfileTableRow
          displayName="Website"
          name="website"
          value={profile?.website}
        />
        <ProfileTableRow
          displayName="Description"
          name="description"
          value={profile?.description}
        />
        <ProfileTableRow displayName="Type" name="type" value={profile?.type} />
        <ProfileTableRow displayName="CEO" name="ceo" value={profile?.CEO} />
        <ProfileTableRow
          displayName="Address"
          name="address"
          value={profile?.address}
        />
        <ProfileTableRow displayName="City" name="city" value={profile?.city} />
        <ProfileTableRow
          displayName="ZIP Code"
          name="zip"
          value={profile?.zip}
        />
        <ProfileTableRow
          displayName="State"
          name="state"
          value={profile?.state}
        />
        <ProfileTableRow
          displayName="Country"
          name="country"
          value={profile?.country}
        />
        <ProfileTableRow
          displayName="Phone"
          name="phone"
          value={profile?.phone}
        />
      </ProfileTable>
    </ProfileContainer>
  );
};

const ProfileContainer = styled("div")({
  padding: "8px",
  fontFamily: "Segoe UI",
  fontWeight: 600,
  color: "white",
});

const ProfileTable = styled("table")({
  maxWidth: "1000px",
});

const PageTitle = styled("h1")({
  margin: "0px",
  padding: "16px 8px 24px 8px",
});

type ProfileTableRowProps = {
  displayName: string;
  name: string;
  value?: string | number;
};

const ProfileTableRow = ({
  displayName,
  name,
  value,
}: ProfileTableRowProps) => {
  return (
    <tr key={name}>
      <ProfileTableCell>{displayName}</ProfileTableCell>
      <ProfileTableCell>{value}</ProfileTableCell>
    </tr>
  );
};

const ProfileTableCell = styled("td")({
  verticalAlign: "baseline",
  paddingBottom: "16px",
  minWidth: "250px",
  fontSize: "18px",
});
