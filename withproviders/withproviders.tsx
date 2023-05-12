import { UserContext } from "@/contexts/contextprovider";
import { useContext } from "react";
// eslint-disable-next-line react/display-name
const withprovider = (provider: any) => (Components: any) => (props: any) => {
  const contextData: any = useContext(provider)
  return <Components {...props} {...contextData} />
}

export default withprovider;
export const withUser = withprovider(UserContext)
