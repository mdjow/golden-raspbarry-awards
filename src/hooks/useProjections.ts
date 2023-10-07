import { useQuery } from "react-query";

import api from "../services/api";
import { ProjectionsFetchResponse } from "../types/ProjectionsResponse";

interface UseProjectionsProps {
  projection: string;
}

export function useProjections({ projection }: UseProjectionsProps) {
  const { data } = useQuery([projection], async () => {
    const response = await api.get<ProjectionsFetchResponse>(
      `/movies?projection=${projection}`
    );

    return response.data;
  });

  return { ...data };
}
