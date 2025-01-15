// import { useQuery } from "@tanstack/react-query";
// import { Endpoints, TypeGetData } from "~root/constants";
// import { httpClient } from "~root/lib/http-client";
// import { GCountry } from "~root/types/api-response";
// import { APIErrorResponse } from "~root/types/http-client";
// export type GCountriesRequest = {
//   event?: {
//     startTime?: Date;
//     endTime?: Date;
//   };
//   type?: TypeGetData;
//   masterContactResponsibleUserId?: number;
// };
// export const useGetGCountries = (request?: GCountriesRequest) => {
//   const getGCountries = async (): Promise<GCountry[]> => {
//     const res = await httpClient(Endpoints.GCOUNTRIES, {
//       method: "get",
//       data: request,
//     });
//     return res?.data || [];
//   };
//   const { data } = useQuery<GCountry[], APIErrorResponse>({
//     queryKey: [Endpoints.GCOUNTRIES],
//     queryFn: getGCountries,
//   });
//   return { countries: data };
// };
