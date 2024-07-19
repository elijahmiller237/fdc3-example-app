import { useCallback, useState } from "react";
import { ProfileData } from "../types";
import { fetchProfileData } from "../api";

type UseProfileDataState = {
  profile: ProfileData | null;
  loading: boolean;
  refresh: (ticker: string) => Promise<void>;
};

export const useProfileData = (): UseProfileDataState => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<ProfileData | null>(null);

  const refresh = useCallback(async (ticker: string) => {
    setLoading(true);
    setProfile(null);
    try {
      const profileData = await fetchProfileData(ticker);
      setProfile(profileData);
    } catch (e) {
      console.error("Unable to fetch stock news. Encountered error", e);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, profile, refresh };
};
