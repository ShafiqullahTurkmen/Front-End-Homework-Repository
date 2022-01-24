import { useAuth } from "../../contexts/AuthContext";
import { Text } from "@chakra-ui/react";


export default function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <Text fontSize="22">Profile</Text>

      <code>{JSON.stringify(user)}</code>
    </div>
  );
}
