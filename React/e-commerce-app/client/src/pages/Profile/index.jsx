import { useAuth } from "../../contexts/AuthContext";
import { Text, Button } from "@chakra-ui/react";


export default function Profile({ history }) {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout(() => {
      history.push('/')
    });
  }

  return (
    <div>
      <Text fontSize="22">Profile</Text>
      <code>{JSON.stringify(user)}</code>
      <br />
      <br />

      <Button colorScheme="pink" variant="solid" onClick={handleLogout}>Logout</Button>
    </div>
  );
}
